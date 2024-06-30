import {HeartIcon} from "@heroicons/react/24/outline";

import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
     <div className='navbar__logo'>logo😍</div>
     <input type="text" placeholder='search...' className='text-field' ></input>
     <div className='navbar__result'>Found x characters</div>
     <button className='heart'>
          <HeartIcon className="icon" />
          <span className="badge">4</span>
     </button>
    </nav>
  );
}

export default Navbar;
