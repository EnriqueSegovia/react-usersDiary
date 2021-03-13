import React , { Component } from 'react'
import axios from 'axios'
import './App.css';
import DetailsView from './components/DetailsView';
import ViewList from './components/ViewList'

class App extends Component {
  state = {
    data: [],
    route: 'list'
  }

  constructor() {
    super()
    axios.get('https://rickandmortyapi.com/api/character')
    .then(({ data }) => this.setState({ data }))
  }

  render () {
    console.log(this.state)
    const { route, data } = this.state
    return (
      <div className="App">
        {route === 'list' && <ViewList data={data} />}
        {route === 'details' && <DetailsView />}
      </div>
  );
}
}

export default App;
