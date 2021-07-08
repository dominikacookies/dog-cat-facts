import { Component } from "react";
import $ from "jquery"

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

    targetButton.classList.remove("secondary-button")
    targetButton.classList.add("primary-button")

    if (targetButton.id === "cat") {
      targetButton.previousSibling.classList.remove("primary-button")
      targetButton.previousSibling.classList.add("secondary-button")
    } else {
      targetButton.nextSibling.classList.remove("primary-button")
      targetButton.nextSibling.classList.add("secondary-button")
    }
  };

  showAnimalFactScreen = (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value

    console.log(name)

    if (!name) {
      $(event.target).append(`
      <p class="pt-2 error-message"> Keeping things secret? We like your style! But to get your cool fact, please enter a name. </p>
      `)
      return 
    }

    this.setState({
      name,
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