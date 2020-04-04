import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/popup';

import { 
	Container,
	Top,
	Bottom,
	Logo, 
	AppTitle, 
	RightSide, 
	Link, 
	LinkIcon, 
	LinkSpan, 
	LoginSpan, 
	LoginSpanRegular, 
	Menu,
	MobileLink
} from './styles';

import LogoSVG from '../../assets/logo.svg';
import icADD from '../../assets/ic_add.svg';
import icBAG from '../../assets/ic_bag.svg';
import icACC from '../../assets/ic_acc.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = ({popup, popupStatus}) => {
	const [showMenu, setShowMenu ] = useState(false)

	return (
		<Container>
			<Top>
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
	
					<Link onClick={() => {popupStatus('login')}}>
						<LinkIcon src={icACC}/>
						<div>
							<LoginSpan>Olá! Bem vindo</LoginSpan>
							<LoginSpanRegular>Acesse sua conta</LoginSpanRegular>
						</div>
					</Link>
	
					<Menu onClick={() => {setShowMenu(!showMenu)}} src={icMENU}/>
				</RightSide>
	
			</Top>
			
			{showMenu && (
				<Bottom>
					<MobileLink>Produtos</MobileLink>
					<MobileLink>Carrinho</MobileLink>
					<MobileLink>Acesse sua conta</MobileLink>
				</Bottom>
			)}

		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
