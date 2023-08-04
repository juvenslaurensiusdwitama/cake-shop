import React from "react";
import { Link } from "react-router-dom";

import chocoCake from "../assets/cake-choco.png";
import pandanCake from "../assets/cake-pandan.png";
import rainbowCake from "../assets/cake-rainbow.png";
import strawberryCake from "../assets/cake-strawberry.png";
import tiramisuCake from "../assets/cake-tiramisu.png";
import cheeseCake from "../assets/cake-cheese.png";

const Cake = () => {
  return (
    <div className="main-cake">
      <div className="cake-content">
        <div className="cake-title">Cake List</div>
        <div className="flavour-section">
          <Link className="" to="/types">
            <button type="button" className="flav-btn btn btn-secondary">
              Flavour
            </button>
          </Link>
        </div>
        <div className="cake-section">
          <table className="table table-dark table-borderless">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Cakes</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Flavour</th>
                <th scope="col">Handler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="cakes-column">
                  <img src={chocoCake} alt="choco-cake" />
                  <td>Chocolate Cake</td>
                </td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  asperiores eligendi similique culpa perferendis velit aliquid
                  tempora vitae aspernatur possimus!
                </td>
                <td>Rp.170.000</td>
                <td>Not-sweet</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className="cakes-column">
                  <img src={strawberryCake} alt="strawberry-cake" />
                  <td>Strawberry Cake</td>
                </td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nesciunt minus magnam quo voluptatibus esse culpa voluptatum
                  eum laudantium cupiditate nisi.
                </td>
                <td>Rp.145.000</td>
                <td>Sweet</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td className="cakes-column">
                  <td>
                    <img src={rainbowCake} alt="rainbow-cake" />
                    <td>Rainbow Cake</td>
                  </td>
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis veniam, fugit velit deleniti reprehenderit eligendi
                  obcaecati enim cumque aut ipsum.
                </td>
                <td>Rp.165.000</td>
                <td>Very-Sweet</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cake-create-update-submit">
          <Link className="" to="/create">
            <button type="button" className="cake-create btn btn-primary">
              Create Cake
            </button>
          </Link>
          <Link className="" to="/receipt">
            <button type="button" className="submit-cake btn btn-success">
              Submit
            </button>
          </Link>
          <Link className="" to="/update">
            <button type="button" className="cake-update btn btn-primary">
              Update Cake
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cake;
{
  /*
   */
}
