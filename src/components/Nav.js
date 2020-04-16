import React, { useContext } from 'react';
import { AppContext } from './PageWrapper';

const Nav = () => {
    const { isMenuOpen, toggleMenu } = useContext(AppContext);

    if (!isMenuOpen) return null;

    return (
      <nav
        style={{
          background: "var(--black)",
          color: "white",
          position: "fixed",
          width: "1OOvw",
          height: "100vh",
          left: 0,
          right: 0,
        }}
      >
        <h1>Hello</h1>
        <button onClick={toggleMenu}>Close</button>
      </nav>
    );
}

export default Nav;
