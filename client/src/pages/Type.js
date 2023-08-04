import React from "react";
import { Link } from "react-router-dom";

const Type = () => {
  return (
    <div className="type-content">
      <div className="type-title">Type Details</div>
      <div className="type-table">
        <table className="table table-light table-borderless">
          <thead className="table-danger">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Flavour</th>
              <th scope="col">Cakes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Not Sweet</td>
              <td className="cakes-column">
                <td>- Cake</td>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sweet</td>
              <td className="cakes-column">
                <td>- Cake</td>
                <td>- Cake</td>
                <td>- Cake</td>
                <td>- Cake</td>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Very Sweet</td>
              <td className="cakes-column">
                <td>- Cake</td>
                <td>- Cake</td>
                <td>- Cake</td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link className="" to="/cakes">
        <button type="button" className="submit-to-cakes btn btn-secondary">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Type;
