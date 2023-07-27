import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Caretakers from './Caretakers';
import Tasks from './Tasks';

//import components//

// entry point for routes //
const Main = () => {
    return (
        <div>
            <h1>Pops Tracker</h1>
            {/* <Caretakers/> */}
            <br></br>
            <Tasks/>
        </div>
    )
}

export default Main;