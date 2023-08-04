import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Customer,
  Cake,
  Type,
  CreateCake,
  UpdateCake,
  Receipt,
} from "../pages";

const MainContent = () => {
  return (
    <div className="main-main">
      <div className="main-content-header bg-danger">Cake Shop</div>
      <div className="main-content w-100 vh-100">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="customers" element={<Customer></Customer>}></Route>
          <Route path="cakes" element={<Cake></Cake>}></Route>
          <Route path="types" element={<Type></Type>}></Route>
          <Route path="create" element={<CreateCake></CreateCake>}></Route>
          <Route path="update" element={<UpdateCake></UpdateCake>}></Route>
          <Route path="receipt" element={<Receipt></Receipt>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
