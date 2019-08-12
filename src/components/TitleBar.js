import React from 'react'

export default function titleBar() {
    return(
        <div className="title-bar">
            <h1>develop<span>ME</span>nt</h1>
            <div className="login">
                <h2>Login: </h2>
                <input type="text" className="input" />
            </div>
        </div>
    )
}