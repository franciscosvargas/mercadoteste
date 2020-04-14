import React from 'react';

import { Container, AppTitle, LastUpdate, Side, Link, Icon } from './styles';

import icWhats from '../../assets/ic_whats.svg'
import icInfo from '../../assets/ic_info.svg'

const Footer = () => (
	<Container>
		<AppTitle>mercadoteste</AppTitle>
		<LastUpdate>Última atualização da loja: 22/01</LastUpdate>
	</Container>
);

export default Footer;
