import styled from '@emotion/styled';
import { environment } from '../../environments/environment';

export const Page = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const Cart = styled.div`
  position: fixed;
  top: 20vh;
  right: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
  border: 2px solid black;
  
  img {
    width: 2.5rem;
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #e20000;
  -webkit-font-smoothing: antialiased;
  padding-top: 2rem;
  
  h1 {
    margin: 0;
    font-size: 3rem;
    color: transparent;
  }
  
  @supports(-webkit-text-stroke-width: 1.5px) {
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #e20000;
    -webkit-font-smoothing: antialiased;
  }
`;

export const TitleDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4rem auto;
  width: 35%;
  height: 3px;
  background: #e20000;
`;

export const ListCards = styled.div`
  display: flex;
  flex-direction: column;    
  margin: 1rem 0;
  align-items: center;
  max-height: 15rem;
  overflow: auto;
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

// Modal
export const Input = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline: 0;
  color: gray;
`;
