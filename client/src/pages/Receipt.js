import React from "react";
import { Link } from "react-router-dom";

const Receipt = () => {
  return (
    <div className="receipt-content">
      <div className="receipt-title">Receipt</div>
      <div className="receipt-cust-data">
        <table className="table table-light table-borderless">
          <thead className="table-danger">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <td>blablabla</td>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <td>blablabla</td>
              </td>
            </tr>
            <tr>
              <td>Number</td>
              <td>
                <td>blablabla</td>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <td>blablabla</td>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <td>blablabla</td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="receipt-cake-detail">
        <table className="table table-light table-borderless">
          <thead className="table-danger">
            <tr>
              <th scope="col">Cakes</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CakeName</td>
              <td>
                <td>Rp.170.000</td>
              </td>
            </tr>
            <tr>
              <td>CakeName</td>
              <td>
                <td>Rp.165.000</td>
              </td>
            </tr>
            <tr>
              <td>CakeName</td>
              <td>
                <td>Rp.145.000</td>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="receipt-total">Total = Rp.480.000</p>
      </div>
      <Link className="" to="/">
        <button type="button" className="btn btn-secondary">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Receipt;
