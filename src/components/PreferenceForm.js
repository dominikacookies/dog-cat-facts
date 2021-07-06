import React from "react"

const PreferenceForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="input-group mb-3">
        <input type="input" className="form-control" placeholder="Your name" aria-label="Example text with two button addons"/>
        <button className="btn btn-success" type="button" id="dog" onClick={props.selectAnimal}>Dogs</button>
        <button className="btn btn-outline-success" type="button" id="cat" onClick={props.selectAnimal}>Cats</button>      
      </div>
      <button type="submit" className="btn btn-success">
        Get facts!
      </button>
    </form> 
  );
};

export default PreferenceForm