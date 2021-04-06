import React, { ReactElement } from 'react';
import { CardInterface } from '../../models/interfaces/card.interface';
import * as S from './styles';

export type CardProps = {
  item: CardInterface;
}

function Card({ item }: CardProps): ReactElement {

  return (
    <S.SNavLink to="/product-detail">
      <S.CardContainer>
        <img src={ item.image } alt="Item"/>
        <span>{ item.name }</span>
      </S.CardContainer>
    </S.SNavLink>
  );
}

export default Card;
