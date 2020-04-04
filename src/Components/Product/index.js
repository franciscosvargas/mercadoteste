import React from 'react';

import { Container, Name, Image, Price, Button } from './styles';

import vanish from '../../assets/product.png'

const Product = () => (
	<Container>

		<Name>Alv. Sem Cloro Vanish Refil Reckitt 500ML</Name>
		<Image src={vanish}/>
		<Price>Por: R$ 5,00</Price>
		<Button>Adicionar ao carrinho</Button>

	</Container>
);

export default Product;
