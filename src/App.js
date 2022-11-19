import "./App.css";
// import React, { useEffect, useState } from 'react'
import {
  Header,
  Footer,
  Home,
  Recipes,
  MealDetails,
  About,
  Contact,
  Login,
  Register,
} from "./components/exp-index";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

function App() {
  return (
    <>
      <AuthProvider authType={"cookie"} authName={"_auth"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/MealDetails/:urls" element={<MealDetails />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
