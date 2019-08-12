import React, {Component} from 'react';
import './App.css';
import TitleBar from './components/TitleBar'
import AllCardsContainer from './components/AllCardsContainer'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/aspirations")
        .then(response => response.json())
        .then(response => this.setState({
            data: response
        }))
  }
  render() {
  return (
    <div className="main-container">
      <TitleBar />
      <AllCardsContainer data={this.state.data}/>
      {console.log(this.state.data)}
    </div>
  );}
}

export default App;
