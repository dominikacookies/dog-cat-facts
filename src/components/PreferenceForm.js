import React from "react"

const PreferenceForm = () => {
  return (
    <form>
      <div className="mb-3">
        <div>
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-check form-switch">
        <span> Cats </span>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <span> Dogs </span>
      </div>
      <button type="submit" className="btn btn-primary">
        Get facts!
      </button>
    </form> 
  );
};

export default PreferenceForm