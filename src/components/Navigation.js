import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <div>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/user">User</NavLink>
    </div>
  );
};


export default Navigation;
