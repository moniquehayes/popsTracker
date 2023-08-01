import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Caretakers from "./Caretakers";
import Tasks from "./Tasks";

//import components//

// entry point for routes //
const Main = () => {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Pops Tracker</h1>
      {/* <Caretakers/> */}
      <br></br>
      {/* <Tasks/> */}
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default Main;
