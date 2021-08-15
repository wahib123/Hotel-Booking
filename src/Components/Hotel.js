import React, { useEffect, useState } from 'react'
import { Layout, Row, Col, Input, Select, DatePicker } from 'antd'
import Room from './Room'
import axios from 'axios'
import Heading from './Heading'
const { Content } = Layout;
const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;
const Hotel = () => {
    const [hotels, setHotels] = useState([])
    const [filter, setFilter] = useState("name")
    const [range, setRange] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                console.log(res.data)
                setHotels(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    function search(value) {
        console.log(value)
        axios.post('http://localhost:5000/searchHotel',{filter, value})
        .then(res => {
            setHotels(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <Layout >
            <Content className="site-layout">
                <Heading heading="hotels"/>
                <div className="search-container">
                <span className="search-by">Search By :</span>
                <Select defaultValue="name" style={{ width: 120 }} onSelect={(value) => {
                    console.log(value);
                    setFilter(value)
                    }}>
                    <Option value="name">Name</Option>
                    <Option value="country">Country</Option>
                    <Option value="date">Date</Option>
                </Select>
                {filter==="date" ? <RangePicker className="search-input-date" format="DD-MM-YYYY" onChange={(value)=>{
                    setRange(value)
                    axios.post('http://localhost:5000/searchHotel',{filter, "range": value})
                    .then(res => {
                        setHotels(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    }}/> : <Search placeholder="Search" onSearch={search} enterButton className="search-input" />}
                </div>
                <div className="site-card-wrapper" style={{ margin: 24 }}>
                    <Row justify="space-around" gutter={16} >
                        {hotels.map((hotel, index) =>
                        (
                            <Col className="column" xs={24} md={6} key={index}><Room hotel={hotel} /></Col>
                        )
                        )}
                    </Row>
                </div>
            </Content>
        </Layout>
    )
}

export default Hotel