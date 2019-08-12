import React from 'react'
import Card from './Card'

const aspirationsIndex = (props) => {
    console.log(props.data)
    const data = props.data.map(data => {
        return <Card data={data} changeActiveCard={props.changeActiveCard}/>
    })
    return (
        <div className="container">
            <h2>All Aspirations</h2>
            <div className="aspirations-index">
                {data}
            </div>
        </div>
    )
}

export default aspirationsIndex