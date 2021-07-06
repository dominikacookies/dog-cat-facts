import React from "react"

const PreferenceForm = (props) => {
  return (
    <form>
      <div className="input-group mb-3">
        <input type="input" className="form-control" placeholder="Name" aria-label="Example text with two button addons"/>
        <button className="btn btn-outline-secondary" type="button" id="dog" onClick={props.selectAnimal}>Dogs</button>
        <button className="btn btn-outline-secondary" type="button"id="cat" onClick={props.selectAnimal}>Cats</button>      
      </div>
      <button type="submit" className="btn btn-primary">
        Get facts!
      </button>
    </form> 
  );
};

export default PreferenceForm