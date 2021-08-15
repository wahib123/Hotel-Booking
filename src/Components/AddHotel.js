import React, {useState} from 'react'
import Heading from './Heading'
import { Layout, Input, Form, Button } from 'antd'
import {useHistory, useLocation} from 'react-router-dom'
import axios from 'axios'
import './style.css'
const { Content } = Layout;
const { TextArea } = Input


const AddHotel = () => {
    const {state} = useLocation()
    const history = useHistory()
    if(state){
        var id=state.hotel._id
    }
    const [name, setName] = useState(state ? `${state.hotel['name']}` : "")
    const [country, setCountry] = useState(state ? state.hotel['country'] : "")
    const [address, setAddress] = useState(state ? state.hotel['address'] :"")
    const [room1, setRoom1] = useState(state ? state.hotel['room'][0]['type'] :"")
    const [room2, setRoom2] = useState(state ? state.hotel['room'][1]['type'] :"")
    const [room3, setRoom3] = useState(state ? state.hotel['room'][2]['type'] :"")
    const [room4, setRoom4] = useState(state ? state.hotel['room'][3]['type'] :"")
    const [room5, setRoom5] = useState(state ? state.hotel['room'][4]['type'] :"")
    const [room1Price,setRoom1price] = useState(state ? state.hotel['room'][0]['price'] :"")
    const [room2Price,setRoom2price] = useState(state ? state.hotel['room'][1]['price'] :"")
    const [room3Price,setRoom3price] = useState(state ? state.hotel['room'][2]['price'] :"")
    const [room4Price,setRoom4price] = useState(state ? state.hotel['room'][3]['price'] :"")
    const [room5Price,setRoom5price] = useState(state ? state.hotel['room'][4]['price'] :"")

    function submitData(){
        const data = {
            name, 
            address, 
            country, 
            room1, 
            room2, 
            room3, 
            room4, 
            room5, 
            room1Price, 
            room2Price, 
            room3Price,
            room4Price,
            room5Price,
        }
        if(state){
            console.log("In update request")
            data['id'] = id
            console.log(id)
            axios.post("http://localhost:5000/updateHotel",data)
            .then(res=>{
                console.log("Data updated successfully")
                history.push("/")
            })
            .catch(err=>{
                console.log("Error",err)
            })
        }
        else{
            axios.post("http://localhost:5000/addHotel",data)
            .then(res=>{
                console.log("Data addedd successfully")
                history.push("/")
            })
            .catch(err=>{
                console.log("Error",err)
            })
        }
    }

    console.log(name)
    return (
        <>
            <Layout>
                <Heading heading={state ? "Update Hotel" : "Add Hotel"} id="add-hotel" />
                <Content className="add-hotel-container" style={{backgroundColor:"#26384d!important" }}>
                    <Form style={{ width: '30%',backgroundColor:"#26384d!important" }} onFinish={() => submitData()}>
                        <Input value={name} placeholder="Hotel Name" className="add-hotel-input" onChange={(e) => setName(e.target.value)}/>
                        <Input value={country} placeholder="Country" className="add-hotel-input" onChange={(e) => setCountry(e.target.value)}/>
                        <TextArea value={address} rows={4} placeholder="Hotel Address" className="add-hotel-input" onChange={(e) => setAddress(e.target.value)} />
                        <Form.Item label="Room Types" className="room-types"></Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input value={room1} placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom1(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input value={room1Price} placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom1price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input value={room2} placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom2(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input value={room2Price} placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom2price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input value={room3} placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom3(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input value={room3Price} placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom3price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input value={room4} placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom4(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input value={room4Price} placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom4price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input value={room5} placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom5(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input value={room5Price} placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom5price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Button type="primary" block htmlType="submit" className="add-hotel-button">
                            {state ? "Update" : "Submit"}
                        </Button>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}

export default AddHotel
