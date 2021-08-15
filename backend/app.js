const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const moment = require('moment')
const port = 5000
// require('./db')
const Hotel = require('./db')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next();
})
app.get('/', function(req, res){
    Hotel.find(function(err, hotel){
        if(err){
            res.status(400).json("Error" + err)
        }
        else{
            res.send(hotel)
        }
    })
})
app.post('/addHotel',function(req, res){
    const body = req.body
    let room_type = []
    for(let i=1;i<6;i++){
        let obj = {
            "type":body[`room${i}`],
            "price":body[`room${i}Price`],
            "from":"",
            "to":"",
        }
        room_type.push(obj)
    }
    const data = {
        name:body.name,
        country:body.country,
        address:body.address,
        room: room_type,
    }
    const hotel = new Hotel(data);
    hotel.save();
    res.send(data)
})

app.post('/updateHotel',function(req, res){
    const body = req.body
    console.log(body)
    let room_type = []
    for(let i=1;i<6;i++){
        let obj = {
            "type":body[`room${i}`],
            "price":body[`room${i}Price`],
            "from":"",
            "to":"",
        }
        room_type.push(obj)
    }
    Hotel.findByIdAndUpdate(body.id,{name: body.name, country: body.country, address: body.address, room: room_type},function(err, hotel){
        if(err){
            res.status(400).json("error"+err)
        }
        else{
            console.log(hotel)
            res.send("Data Updated Successfully")
        }
    })
})

app.post('/bookroom',async function(req,res){
    const body = req.body
    let rooms = []
    function updateRoom(){
        Hotel.findOne({_id:body.id},function(err, hotel){
            if(err){
                res.status(400).json("Err"+err)
            }
            else{
                hotel.room.map(r => {
                    if(r.type == body.room){
                        r.from = body.range[0]
                        r.to = body.range[1]
                        // console.log(r)
                    }
                    rooms.push(r)
                })
                console.log("Rooms",rooms)
                Hotel.findByIdAndUpdate({_id: body.id}, {room:rooms},function(err, hotel){
                    if(!err){
                        console.log("Updated")
                        res.send("Success")
                    }
                })
            }
        })
    }
    updateRoom()
})

function searchHotel(req, res) {
    const query = {};
    console.log(req.body)
    query[req.body.filter] = {"$regex":"^"+req.body.value, "$options":"i"}
    console.log(query)
    Hotel.find(query,function(err,hotels){
        if(err){
            res.status(400).json("Error" + err)
        }
        else{
            res.send(hotels)
        }
    })
}

app.post('/searchHotel',async function(req, res){
    if(req.body.filter === "date"){
        let rooms = []
        const range = req.body.range
        await Hotel.find(function(err, hotels){
            if(err){
                res.status(400).json("Err:",err)
            }
            else{
                hotels.map((hotel,i) => {
                    if(hotel.room.length > 0){
                        hotel.room.map((r, i) => {
                            if(r["from"]){
                                if(moment(moment(r["from"]).format('YYYY-MM-DD')).isBetween(moment(range[0]).format('YYYY-MM-DD'),moment(range[1]).format('YYYY-MM-DD'),undefined,[])){
                                    hotel.room.splice(i)
                                }                
                            }
                        })
                        // console.log("In hotel",hotel)
                    }

                })
                hotels.map(hotel => {
                    if(hotel.room.length > 0){
                        rooms.push(hotel)
                    }
                    else{
                        console.log("In else part")
                    }
                })
                res.send(rooms)
            }
        })
    }
    else{
        searchHotel(req, res)
    }
})



app.listen(port, () => console.log(`Example app listening on port port!`))