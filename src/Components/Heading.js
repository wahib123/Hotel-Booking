import React from 'react'

const Heading = ({heading, id}) => {
    return (
        <h1 className="hotel-heading" id={id}>{heading}</h1>
    )
}

export default Heading
