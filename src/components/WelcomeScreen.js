import React from "react"

const WelcomeScreen = (props) => {
  return (
    <div>
      <h3> Find fun facts about your favourite animal here :) </h3> 
      <p> To get started pop in your name and choose if you'd like facts about cats or dogs.</p>
      <form onSubmit={props.onSubmit}>
        <div className="input-group mb-3">
          <input type="input" className="form-control" placeholder="Your name" id="name" aria-label="Example text with two button addons"/>
          <button className="btn primary-button" type="button" id="dog" onClick={props.selectAnimal}>Dogs</button>
          <button className="btn secondary-button" type="button" id="cat" onClick={props.selectAnimal}>Cats</button>      
        </div>
        <button type="submit" className="btn primary-button">
          Get facts!
        </button>
      </form> 
    </div>
  );
};

export default WelcomeScreen