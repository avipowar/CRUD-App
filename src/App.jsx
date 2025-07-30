import React from "react";
import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreateForm />} />
      </Routes>
    </>
  );
}

export default App;
