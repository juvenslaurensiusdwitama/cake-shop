import React from "react";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div className="customer-intro">
      <div className="customer-title">Input Customer Data</div>
      <input
        className="form-control"
        type="text"
        placeholder="Name"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Number"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Email"
        aria-label="default input example"
      ></input>
      <input
        className="form-control"
        type="text"
        placeholder="Address"
        aria-label="default input example"
      ></input>
      <Link className="" to="/cakes">
        <button type="button" className="submit-cust btn btn-success">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Customer;
