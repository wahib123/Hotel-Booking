import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Layout, Select, DatePicker, Button } from 'antd'
import moment from 'moment'
import Heading from './Heading'
import axios from 'axios'

const { Option } = Select;
const { RangePicker } = DatePicker;

const BookRoom = () => {
    const { state } = useLocation()
    const [range, setRange] = useState("")
    const [room, setRoom] = useState("")
    const history = useHistory()
    function bookRoom() {
        console.log(range)
        axios.post("http://localhost:5000/bookroom",{room, range,"id":state.hotel._id})
        .then(res => {
            history.push("/")
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    function dateFormate(date){
        return moment(date).format('YYYY-MM-DD')
    }
    return (
        <Layout>
            <Heading heading="Book Room" />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="book-room-container">
                    <table>
                        <tbody>
                        <tr>
                            <td><h1>Name:</h1></td>
                            <td><h1>{state.hotel.name}</h1></td>
                        </tr>
                        <tr>
                            <td><h1>Country:</h1></td>
                            <td><h1>{state.hotel.country}</h1></td>
                        </tr>
                        <tr>
                            <td><h1>Address:</h1></td>
                            <td><h1>{state.hotel.address}</h1></td>
                        </tr>
                        <tr>
                            <td><h1>Select Date: </h1></td>
                            <td><RangePicker style={{ marginLeft: "1rem" }} onChange={(value) => {
                                setRange(value)
                                console.log()
                                }}/></td>
                        </tr>
                        <tr>
                            <td><h1>Available Rooms: </h1></td>
                            <td><Select defaultValue="Room Type" style={{ width: 200, marginLeft: "1rem" }} onSelect={(value) => setRoom(value)}>
                                {state.hotel.room.map((room, id) => {
                                    if(room.type){
                                        if(!moment(dateFormate(room["from"])).isBetween(dateFormate(range && range[0]),dateFormate(range && range[1]),undefined,[])){
                                            return(<Option key={id} value={room.type}>{room.type}</Option>)
                                        }   
                                    }
                                })}
                            </Select><br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="book-room">
                            {state.hotel.room.map((r,id) => {
                                if(r.from){
                                    return(<span key={id} >{r.type} room is booked from {dateFormate(r.from)} to {dateFormate(r.to)}<br /></span>)
                                }
                            })}
                            </div>
                    <Button type="primary"onClick={() => bookRoom()} size="large" style={{ width: "40%" }} className="add-hotel-button">
                        Book
                    </Button>
                </div>
            </div>
        </Layout>
    )
}

export default BookRoom
