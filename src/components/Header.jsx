import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/AdSync.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0.4rem 1.5rem 0.4rem 1.5rem;;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    hight: auto;
    max-width: 30%;
  }
`;

export default Header;
