import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return <Pet pet={pet}
            id={pet.id}
            name={pet.name}
            gender={pet.gender}
            weight={pet.weight}
            type={pet.type}
            age={pet.age}
            isAdopted={this.props.adoptedPets.includes(pet.id)}
            onAdoptPet={this.props.onAdoptPet}
          />
        })
        }
      </div>
    )}
}

export default PetBrowser;
