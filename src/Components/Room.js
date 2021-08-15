import React from 'react'
import {Card, Button} from 'antd'
import {Link} from 'react-router-dom'

const Room = ({hotel}) => {
    return (
            <Card title={hotel.name} bordered={false}>
                <p className="country"><b>Country:</b> {hotel.country}</p>
                <p className="address"><b>Address:</b> {hotel.address}</p>
                <Button size="large" type="primary" className="button"><Link to={{pathname:"/bookroom", state:{"hotel":hotel}}}>Book</Link></Button>
                <Button size="large" type="primary" className="button"><Link to={{pathname:"/addhotel", state:{"hotel":hotel,"update": true}}}>Update</Link></Button>
            </Card>
    )
}

export default Room
