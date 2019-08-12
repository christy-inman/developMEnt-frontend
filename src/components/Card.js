import React from 'react'

const Card = (props) => {
    const {data} = props
    const handleClick = (data) => {
        props.changeActiveCard(data)
    }
    return(
        <div className="card" onClick={() => props.id || handleClick(data)} >
            <h3>Title: {data.title}</h3>
            <h4>Timeframe: {data.time_frame}</h4>
            <h4>Type: {data.kind}</h4>
            <h4>Milestones:</h4>
            <ol>
                <li>{data.milestone_title_1} : {data.milestone_content_1}</li>
                <li>{data.milestone_title_2} : {data.milestone_content_2}</li>
                <li>{data.milestone_title_3} : {data.milestone_content_3}</li>
                <li>{data.milestone_title_4} : {data.milestone_content_4}</li>
                <li>{data.milestone_title_5} : {data.milestone_content_5}</li>
            </ol>
            <h4>Final Goal: {data.aspiration}</h4>
        </div>
    )
}

export default Card