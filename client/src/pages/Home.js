import React from "react";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
// import { Customer } from "./index";
import homeCake from "../assets/kuekue.png";

const Home = () => {
  return (
    <div className="home-intro">
      <img src={homeCake} alt="home-cake" />
      <div className="home-title">
        Wel<span>come</span> to our <span>Cake </span>Shop
        <br />
        Let's
        <span> Shop </span>Now!
      </div>
      <Link className="" to="/customers">
        <button type="button" className="home-btn btn btn-light">
          Check it out!
        </button>
      </Link>
      {/* <Routes>
        <Route path="customers" element={<Customer></Customer>}></Route>
      </Routes> */}
    </div>
  );
};

export default Home;
