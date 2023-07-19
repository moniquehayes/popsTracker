import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Caretakers from './Caretakers';

//import components//

// entry point for routes //
const Main = () => {
    return (
        <div>
            <h1>Pops</h1>
            <Caretakers/>
        </div>
    )
}

export default Main;