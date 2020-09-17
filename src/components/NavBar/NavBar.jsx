import React from 'react';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            Welcome, {user.name}
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
              <li><a href="/createroom">Create Room</a></li>
              <li><a href="/">All Rooms slash Home</a></li>
              <li><a href="/createmeeting">Create Meeting</a></li>
            </ul>
          </div>
        </nav>
        :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
