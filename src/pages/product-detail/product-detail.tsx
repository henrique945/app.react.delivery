import { Modal } from 'antd';
import React, { ReactElement, useEffect, useState } from 'react';
import back from '../../assets/imgs/back.png';
import pizza from '../../assets/imgs/card-pizza.jpg';
import plus from '../../assets/imgs/plus-red.png';
import Card from '../../components/card/card';
import { CardInterface } from '../../models/interfaces/card.interface';
import * as S from './style';

function ProductDetail(): ReactElement {

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
    <div>
      <Modal title="Adicionar itens" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <S.Input type="text" placeholder="Pesquisar..."></S.Input>

        <S.ListCards>
          { listSearchCards.map((item, key) => (
            <Card key={ key } item={ item }></Card>
          )) }
        </S.ListCards>
      </Modal>

      <S.SNavLink to="/">
        <S.Back src={ back } alt="Voltar"></S.Back>
      </S.SNavLink>
      <S.Image src={ pizza } alt="Pizza"/>
      <S.Name>Nome da Pizza</S.Name>
      <S.Bio>Descrição da pizza, informações básicas, recheios e mais... Descrição da pizza, informações básicas,
        recheios e mais...Descrição da pizza, informações básicas, recheios e mais... Descrição da pizza, informações
        básicas, recheios e mais...</S.Bio>
      <S.Quantity>
        <h6>Quantidade</h6>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </S.Quantity>

      <S.Navbar>
        <S.Plus onClick={showModal}>
          <img src={ plus } alt="Adicionar"/>
        </S.Plus>
      </S.Navbar>
    </div>
  );
}

export default ProductDetail;
