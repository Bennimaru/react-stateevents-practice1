import React, { Component } from "react";
import DogCard from '../Components/DogCard.js'
import Dogs from '../dogs'

class DogList extends Component {

  renderDog = dog =>{
    return <DogCard key={dog.id} dog={dog}/>
  }

  render() {
    return <div className="dogContainer">{/*list of dogs go here*/}
    {Dogs.map(this.renderDog)}
    </div>;
  }
}

export default DogList;
