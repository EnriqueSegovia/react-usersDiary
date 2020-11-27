import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'

class App extends Component {
  state = {
    data: [],
    route: 'list',
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => this.setState({ data }))
  }

  selectedtUser = id => {
    this.setState({
      route: 'form',
      selectedtUser: id,
    })
  }

  addNewUser = user => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(({ data }) => {
      const newData = this.state.data.concat(data)
      this.setState({
        data: newData,
        route: 'list',
      })
    })
  }

  newUser = () => {
    this.setState({ route: 'form' })
  }

  updateUser = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
    .then(() => {
      const newData = this.state.data.map(x => x.id === id ? values : x)
      this.setState({
        data: newData,
        route: 'list',
      })
    })
  }

  render() {
    const { route, data, selectedtUser } = this.state
    const initialsValues = selectedtUser && data.find(x => x.id === selectedtUser)
    return (
      <div className="App">
        {route === 'list' && <ViewList 
          newUser={this.newUser} 
          handleClick={this.selectedtUser} 
          data={data}
        />}
        { route === 'form' && <UserForm
          initialsValues={initialsValues || {}}
          handleSubmit={this.addNewUser}
          handleUpdate={this.updateUser}
        />}
      </div>
    );
  }
}

export default App;
