import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Caretakers from "./Caretakers";
import Tasks from "./Tasks";
import Navbar from "./Navbar";
//import components//

// entry point for routes //
const Main = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold underline">Pops Tracker</h1>
      <br></br>
      <Routes>
        {/**add a Home route to / that has the calendar */}
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/caretakers" element={<Caretakers/>}/>
      </Routes>
    </div>
  );
};

export default Main;
