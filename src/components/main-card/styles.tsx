import styled from '@emotion/styled';
import { environment } from '../../environments/environment';

export const CardContainer = styled.div`
  width: 70%;
  height: 55vw;
  background: white;
  border-radius: 20px;    
  margin: 0 auto;
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.15));
  overflow: hidden;
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75%;
  
  img {
    width: 8rem;
    height: 6rem;
    border-radius: 7px;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  height: 25%;
  background: ${ environment.primaryColor };
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
