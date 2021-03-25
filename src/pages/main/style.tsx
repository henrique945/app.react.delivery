import styled from '@emotion/styled';

export const Page = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #e20000;
  padding-top: 2rem;
`;

export const MainCard = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 22vh;
  height: 20vh;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 3%, rgba(223,26,62,1) 100%);
`;
