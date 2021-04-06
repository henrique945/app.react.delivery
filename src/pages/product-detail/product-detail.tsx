import React, { ReactElement } from 'react';
import back from '../../assets/imgs/back.png';
import pizza from '../../assets/imgs/card-pizza.jpg';
import plus from '../../assets/imgs/plus-red.png';
import * as S from './style';

function ProductDetail(): ReactElement {
  return (
    <div>
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
        <S.Plus>
          <img src={ plus } alt="Adicionar"/>
        </S.Plus>
      </S.Navbar>
    </div>
  );
}

export default ProductDetail;
