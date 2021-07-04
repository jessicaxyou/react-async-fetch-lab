// create your App component here
import React, { Component } from 'react'

class App extends Component {

    state ={
        listOfPeople: []
    }

    render() {
        return (
            <div>
                {this.state.listOfPeople.map(
                    person => person.name
                )}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => this.setState({listOfPeople: data.people}))
    }

}

export default App
