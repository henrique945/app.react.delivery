import React, { ReactElement } from 'react';
import pizza from '../../assets/imgs/main-card-pizza.jpg';
import * as S from './styles';

function MainCard(): ReactElement {

  return (
    <S.CardContainer>
      <S.CardImage>
        <img src={ pizza } alt="Pizza"/>
      </S.CardImage>
      <S.FooterInfo>
        <span>Pizza Name</span>
      </S.FooterInfo>
    </S.CardContainer>
  );
}

export default MainCard;
