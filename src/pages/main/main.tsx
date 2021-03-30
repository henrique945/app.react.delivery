//#region Imports

import React, { ReactElement, useEffect, useState } from 'react';
import pizza from '../../assets/imgs/card-pizza.jpg';
import cartIcon from '../../assets/imgs/cart-icon.png';
import plus from '../../assets/imgs/plus.png';
import Card from '../../components/card/card';
import MainCard from '../../components/main-card/main-card';
import { CardInterface } from '../../models/interfaces/card.interface';
import * as S from './style';

//#endregion

function Main(): ReactElement {

  const [listCards, setListCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    const loadCards = () => {
      const cardTest: CardInterface = {
        image: pizza,
        name: 'pizza name',
      };
      const list: CardInterface[] = [];

      list.push(cardTest);
      list.push(cardTest);
      list.push(cardTest);
      list.push(cardTest);
      list.push(cardTest);

      setListCards(list);
    };

    loadCards();
  }, []);

  return (
    <S.Page>
      <S.Cart>
        <img src={ cartIcon } alt="Carrinho"/>
      </S.Cart>

      <S.Title>
        <h1>Delivery</h1>
        <S.TitleDetail></S.TitleDetail>
      </S.Title>

      <MainCard></MainCard>

      <S.ListCards>
        { listCards.map((item, key) => (
          <Card key={ key } item={ item }></Card>
        )) }
      </S.ListCards>

      <S.Navbar>
        <S.Plus>
          <img src={ plus } alt="Adicionar"/>
        </S.Plus>
      </S.Navbar>
    </S.Page>
  );
}

export default Main;
