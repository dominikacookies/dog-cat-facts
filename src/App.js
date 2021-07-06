import { Component } from "react";

import PreferenceForm from "./components/PreferenceForm";


class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      animal: "dog",
      name: "Pal"

    }
  }

  selectAnimal = (event) => {
    const targetButton = event.target
    this.setState({
      animal: targetButton.id
    })

    targetButton.classList.remove("btn-outline-success")
    targetButton.classList.add("btn-success")

    if (targetButton.id === "cat") {
      targetButton.previousSibling.classList.remove("btn-success")
      targetButton.previousSibling.classList.add("btn-outline-success")
    } else {
      targetButton.nextSibling.classList.remove("btn-success")
      targetButton.nextSibling.classList.add("btn-outline-success")
    }
  }

  showAnimalFact = (event) => {
    event.preventDefault()
    console.log("fact")
  }

  render() {
    return (
      <section className="main-container">
        <div className="content">
          <h1> Hey {this.state.name}!</h1> 
          <h3> Find fun facts about your favourite animal here :) </h3> 
          <p> To get started pop in your name and choose if you'd like facts about cats or dogs.</p>
          <PreferenceForm selectAnimal={this.selectAnimal} onSubmit={this.showAnimalFact}/>
        </div>
    </section>
    )
  }
}

export default App;