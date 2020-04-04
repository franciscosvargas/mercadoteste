import React from 'react';

import { Container, Name, Image, Price, Button } from './styles';


const Product = ({info}) => (
	<Container>

		<Name>{info.name}</Name>
		<Image src={info.url}/>
		<Price>Por: R${info.price}</Price>
		<Button>Adicionar ao carrinho</Button>

	</Container>
);

export default Product;
