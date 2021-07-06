import { Component } from "react";

import {fetchCatFact, fetchDogFact} from "../utils/fetchFact";

class AnimalFactScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    }
  }

  async componentDidMount() {
    const animal = document.getElementById("dog")
    const animalFact = (!animal) ? 
      await fetchCatFact() 
      : await fetchDogFact()
      
    console.log(animalFact)

  }

  render() {
    return (
      <div id={this.props.animal} >
        <h3>
          Here's your fun fact about {this.props.animal}s:
        </h3>

      </div>
    )
  }


}

export default AnimalFactScreen