import React from 'react';

import { Container, Logo, AppTitle, RightSide, Link, LinkIcon, LinkSpan, LoginSpan, LoginSpanRegular, Menu } from './styles';

import LogoSVG from '../../assets/logo.svg';
import icADD from '../../assets/ic_add.svg';
import icBAG from '../../assets/ic_bag.svg';
import icACC from '../../assets/ic_acc.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = () => (
	<Container>
		<Logo src={LogoSVG}/>
		<AppTitle>mercadoteste</AppTitle>

		<RightSide>
			<Link>
				<LinkIcon src={icADD}/>
				<LinkSpan>Produtos</LinkSpan>
			</Link>

			<Link>
				<LinkIcon src={icBAG}/>
				<LinkSpan>Carrinho</LinkSpan>
			</Link>

			<Link>
				<LinkIcon src={icACC}/>
				<div>
					<LoginSpan>Olá! Bem vindo</LoginSpan>
					<LoginSpanRegular>Acesse sua conta</LoginSpanRegular>
				</div>
			</Link>

			<Menu src={icMENU}/>


		</RightSide>
	</Container>
);

export default TopBar;
