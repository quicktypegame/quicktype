import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 10px;
  background-color: #ff0000;
  display: flex;
  justify-content: space-between;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;
  }
  .nav a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem
}
.site-title {
    font-size: 2rem;

}
.logo {
    border: 0.5rem double #000;
    max-width:  50px;
    max-height: 50px;
}
`

const Navbar = () => {
  return (
    <Nav>
      <div className={"nav"}>

          <a href={"/"} className={"site-title"}><img src="qtlogo.png" alt="logo" className={"logo"}/>QuickType</a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar