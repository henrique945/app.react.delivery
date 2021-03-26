import React, { ReactElement } from 'react';
import { CardInterface } from '../../pages/main/card.interface';
import * as S from './styles';

export type CardProps = {
  item: CardInterface;
}

function Card({ item }: CardProps): ReactElement {

  return (
    <S.CardContainer>
      <img src={ item.image } alt="Item"/>
      <span>{ item.name }</span>
    </S.CardContainer>
  );
}

export default Card;
