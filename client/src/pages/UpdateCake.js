import React from "react";
import { Link } from "react-router-dom";

const UpdateCake = () => {
  return (
    <div className="create-update-content">
      <div className="create-update-title">Update Cake</div>
      <input
        className="form-control"
        type="text"
        placeholder="Id"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Name"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Image"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Description"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Price"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Flavour"
        aria-label="default input example"
      ></input>
      <Link className="" to="/cakes">
        <button type="button" className="submit-to-cakes btn btn-primary">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default UpdateCake;
