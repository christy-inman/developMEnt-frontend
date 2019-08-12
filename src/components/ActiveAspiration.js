import React from 'react'
import Card from './Card'

export default function activeAspiration(props) {
    return(
        <div className="active-container">
            <h2>Selected Aspiration</h2>
            <div className="active-card">
                <Card data={props.data} />
            </div>
        </div>
    )
}