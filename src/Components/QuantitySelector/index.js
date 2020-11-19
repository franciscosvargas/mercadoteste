import React from 'react';
import { Container, Price, ButtonCart, SpanQnt } from './styles'

const PriceSelector = ({ price, qnt, addAndRefresh, removeAndRefresh }) => {
	return (
		<Container>
      <Price>Por: R$ {price}</Price>
      <ButtonCart onClick={removeAndRefresh}>-</ButtonCart>
			<SpanQnt>{qnt}</SpanQnt>
			<ButtonCart onClick={addAndRefresh}>+</ButtonCart>
		</Container>
	)
};

export default PriceSelector;
