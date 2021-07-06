import { Component } from "react";

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
    const animalFact = (!animal) ? "cat fact" : "dog fact"
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