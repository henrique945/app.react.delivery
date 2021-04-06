import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { environment } from '../../environments/environment';

export const SNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const Back = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1rem;
  transform: rotate(180deg);
`;

export const Image = styled.img`
  width: 100%;
`;

export const Name = styled.h1`
  color: #e20000;
  text-align: center;
`;

export const Bio = styled.p`
  padding: 0 1.5rem;
  text-align: center;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  h6 {
    font-size: 0.9rem;
  }
  
  button {
    width: 3rem;
    outline: 0;
    border: 2px solid #e20000;
    background: transparent;
    font-size: 1rem;
  }
`;

export const Navbar = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 3rem;
  background: ${ environment.primaryColor };
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.15));
`;

export const Plus = styled.div`
  position: absolute;
  right: 1rem;
  top: -1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #f5f5f5;    
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.15));
  
  img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
`;
