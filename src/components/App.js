import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
    this.changeType = this.changeType.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
    this.setPetData = this.setPetData.bind(this)
    this.addId = this.addId.bind(this)
  }

  changeType (type) {
    this.setState({
      ...this.state.pets,
      filters: {
        type: type
      }
    })
  }

  fetchPets() {
    if (this.state.filters.type === 'all') {
      this.setPetData(fetch('/api/pets'))
    } else if (this.state.filters.type === 'cat') {
      this.setPetData(fetch('/api/pets?type=cat'))
    } else if (this.state.filters.type === 'dog') {
      this.setPetData(fetch('/api/pets?type=dog'))
    } else {
      this.setPetData(fetch('/api/pets?type=micropig'))
    }
  }

  setPetData (data) {
    this.setState({
      pets: data
    })
  }

  addId (id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.addId}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
