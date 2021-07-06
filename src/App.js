import { Component } from "react";

import PreferenceForm from "./components/PreferenceForm";


class App extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <section className="main-container">
        <div className="content">
          <h1> Hello </h1> 
          <PreferenceForm />
        </div>
    </section>
    )
  }
}

export default App;