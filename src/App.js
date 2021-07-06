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
    this.setState({
      animal: event.target.id
    })
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