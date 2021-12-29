import React from 'react';
import logo from '../../logo.png';
import avatar from '../../avatar.png';
import {useHistory} from 'react-router-dom'

function Nav() {

  const history = useHistory()
  function homeRedirect(){
    history.push("/")
  }
    return (
      <div className="nav false">
        <img
          className="nav__logo"
          src={avatar}
          alt=""
          onClick={homeRedirect}
        />
        <img
          className="nav__avatar"
          src={logo}
          alt=""
        />
      </div>
    );
  }
  
export default Nav;