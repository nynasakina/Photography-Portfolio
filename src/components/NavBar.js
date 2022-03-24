import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/NavBar.module.css";


const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/Gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/FAQ">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
