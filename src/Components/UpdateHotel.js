import React, {useState} from 'react'
import Heading from './Heading'
import { Layout, Input, Form, Button } from 'antd'
import axios from 'axios'
import './style.css'
const { Content } = Layout;
const { TextArea } = Input

const UpdateHotel = () => {
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [room1, setRoom1] = useState("")
    const [room2, setRoom2] = useState("")
    const [room3, setRoom3] = useState("")
    const [room4, setRoom4] = useState("")
    const [room5, setRoom5] = useState("")
    const [room1Price,setRoom1price] = useState("")
    const [room2Price,setRoom2price] = useState("")
    const [room3Price,setRoom3price] = useState("")
    const [room4Price,setRoom4price] = useState("")
    const [room5Price,setRoom5price] = useState("")

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
        axios.post("http://localhost:5000/addHotel",data)
        .then(res=>{
            console.log("Data addedd successfully")
        })
        .catch(err=>{
            console.log("Error",err)
        })
    }

    console.log(name)
    return (
        <>
            <Layout>
                <Heading heading="Add Hotel" id="add-hotel" />
                <Content className="add-hotel-container" style={{backgroundColor:"#26384d!important" }}>
                    <Form style={{ width: '30%',backgroundColor:"#26384d!important" }} onFinish={() => submitData()}>
                        <Input placeholder="Hotel Name" className="add-hotel-input" onChange={(e) => setName(e.target.value)}/>
                        <Input placeholder="Country" className="add-hotel-input" onChange={(e) => setCountry(e.target.value)}/>
                        <TextArea rows={4} placeholder="Hotel Address" className="add-hotel-input" onChange={(e) => setAddress(e.target.value)} />
                        <Form.Item label="Room Types" className="room-types"></Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom1(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom1price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom2(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom2price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom3(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom3price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom4(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom4price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item style={{ margin: 0 }}>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input placeholder="Room Type" className="add-hotel-input" onChange={(e) => setRoom5(e.target.value)}/>
                            </Form.Item>
                            <Form.Item
                                
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 1rem' }}
                            >
                                <Input placeholder="Room Price" className="add-hotel-input" onChange={(e) => setRoom5price(e.target.value)}/>
                            </Form.Item>
                        </Form.Item>
                        <Button type="primary" block htmlType="submit" className="add-hotel-button">
                            Submit
                        </Button>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}

export default UpdateHotel
