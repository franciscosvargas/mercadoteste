import React from 'react';
import { Container, Price, ButtonCart, SpanQnt } from './styles'

const PriceSelector = ({ qty = 0 }) => {
	return (
		<Container>
      <Price>Por: R$ {qty}</Price>
      <ButtonCart>-</ButtonCart>
			<SpanQnt>{qty}</SpanQnt>
			<ButtonCart>+</ButtonCart>
		</Container>
	)
};

export default PriceSelector;
