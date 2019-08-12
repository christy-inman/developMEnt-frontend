import React, {Component} from 'react'
import AspirationsIndex from './AspirationsIndex'
import ActiveAspiration from './ActiveAspiration'

const usersUrl = 'localhost:3000/api/v1/users'
const aspirationsUrl = 'localhost:3000/api/v1/aspirations'

export default class AllCardsContainer extends Component {
    state = {
        data: {}
    }

    changeActiveCard = (data) => {
        this.setState({
            data: data
        })
    }
    
    render() {
        return (
            <div className="all-cards-container">
                <AspirationsIndex changeActiveCard={this.changeActiveCard} data={this.props.data}/>
                {this.props.data.length
                    ? <ActiveAspiration data={this.state.data}/>
                    : "No Selected Aspiration"}
            </div>
        )
    }
}