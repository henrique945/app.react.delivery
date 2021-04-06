//#region Imports

import React, { ReactElement, useEffect, useState } from 'react';
import pizza from '../../assets/imgs/card-pizza.jpg';
import cartIcon from '../../assets/imgs/cart-icon.png';
import plus from '../../assets/imgs/plus-red.png';
import Card from '../../components/card/card';
import MainCard from '../../components/main-card/main-card';
import { CardInterface } from '../../models/interfaces/card.interface';
import * as S from './style';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

//#endregion

function Main(): ReactElement {

  const [listCards, setListCards] = useState<CardInterface[]>([]);
  const [listSearchCards, setListSearchCards] = useState<CardInterface[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

      setListSearchCards(list);
    };

    loadCards();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <S.Page>
      <Modal title="Adicionar itens" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <S.Input type="text" placeholder="Pesquisar..."></S.Input>

        <S.ListCards>
          { listSearchCards.map((item, key) => (
            <Card key={ key } item={ item }></Card>
          )) }
        </S.ListCards>
      </Modal>

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
        <S.Plus onClick={showModal}>
          <img src={ plus } alt="Adicionar"/>
        </S.Plus>
      </S.Navbar>
    </S.Page>
  );
}

export default Main;
