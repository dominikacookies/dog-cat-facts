import { Component } from "react";

import WelcomeScreen from "./components/WelcomeScreen";
import AnimalFactScreen from "./components/AnimalFactScreen";


class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      displayWelcomeScreen: true,
      displayAnimalFactScreen: false,
      animal: "dog",
      name: "Pal"
    }
  };

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
  };

  showAnimalFactScreen = (event) => {
    event.preventDefault()

    this.setState({
      name: document.getElementById("name").value,
      displayWelcomeScreen: false,
      displayAnimalFactScreen: true
    })
  };

  render() {
    return (
      <section className="main-container">
        <div className="content">
          <h1> Hey {this.state.name}!</h1> 
          {this.state.displayWelcomeScreen && (
            <WelcomeScreen selectAnimal={this.selectAnimal} onSubmit={this.showAnimalFactScreen}/>
          )}

          {this.state.displayAnimalFactScreen && (
            <AnimalFactScreen animal={this.state.animal} />
          )}
        </div>
      </section>
    )
  };
}

export default App;