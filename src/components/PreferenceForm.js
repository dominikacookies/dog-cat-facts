import React from "react"

const PreferenceForm = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <input type="input" className="form-control" placeholder="Name" aria-label="Example text with two button addons"/>
        <button className="btn btn-outline-secondary" type="button">Dogs</button>
        <button className="btn btn-outline-secondary" type="button">Cats</button>      
      </div>
      <button type="submit" className="btn btn-primary">
        Get facts!
      </button>
    </form> 
  );
};

export default PreferenceForm