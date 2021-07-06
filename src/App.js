import { Component } from "react";

import PreferenceForm from "./components/PreferenceForm";


class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      animal: "dog"
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

  render() {
    return (
      <section className="main-container">
        <div className="content">
          <h1> Hello </h1> 
          <PreferenceForm selectAnimal={this.selectAnimal}/>
        </div>
    </section>
    )
  }
}

export default App;