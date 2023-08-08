import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/caretakers'>Caretakers</Link>
        </div>
    )
};

export default Navbar;