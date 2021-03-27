import styled from '@emotion/styled';
import { environment } from '../../environments/environment';

export const CardContainer = styled.main`
  display: flex;
  align-items: center;
  width: 70%;
  height: 4rem;
  background: ${environment.primaryColor};
  border-radius: 15px;
  margin: 0.5rem 0; 
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0 0.8rem;
    object-fit: cover;
  }
  
  span {
    color: white;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
`;
