import React, {useEffect, useState} from 'react';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);

    return (
        <div className={`nav ${show && "nav__black"} `}>
            <img
                className="nav__logo"
                
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix Logo"
            />

            {/* <button className="nav__avatar">SignIn</button> */}
            
        </div>
    )
}

export default Nav
