import { Component } from "react";

import NewFactButton from "./NewFactButton";
import {fetchCatFact, fetchDogFact} from "../utils/fetchFact";

class AnimalFactScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      fact: null,
      error: null
    }
  }

  componentDidMount() {
    this.presentFact()
  }

  presentFact = async () => {
        // reset states after mounting
        this.setState({
          isLoading: true,
          fact: null,
          error: null
        });
    
        const animal = document.getElementById("dog")
    
        // get fact from third party API
        const fact = (!animal) ? 
          await fetchCatFact() 
          : await fetchDogFact()
    
        if (fact.error) {
          this.setState({
            isLoading: false,
            error: true
          })
        } else {
          this.setState({
            fact,
            isLoading: false,
          });
        }
  }

  render() {
    return (
      <div id={this.props.animal}>
        {this.state.isLoading && (
          <div >
            <h3>We're just getting your fact.</h3>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {this.state.error && (
          <div>
            <h3>Sorry, something has gone wrong! </h3>
            <NewFactButton onClick={this.presentFact} />
          </div>
        )}
        {this.state.fact && (
          <div> 
            <h3>
              Here's your fun fact about {this.props.animal}s:
            </h3>
            <p>
              {this.state.fact}
            </p>
            <NewFactButton onClick={this.presentFact} />
          </div>
        )}

      </div>
    )
  }


}

export default AnimalFactScreen