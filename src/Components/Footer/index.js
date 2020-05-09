import React from 'react';

import { Container, AppTitle, LastUpdate } from './styles';

const Footer = ({isFixed}) => (
	<Container isFixed={isFixed}>
		<AppTitle  isFixed={isFixed}>mercadoteste</AppTitle>
		<LastUpdate  isFixed={isFixed}>Última atualização da loja: 22/01</LastUpdate>
	</Container>
);

export default Footer;
