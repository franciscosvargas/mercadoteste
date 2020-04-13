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
	LinkContainer,
	LinkIcon, 
	LinkSpan, 
	LoginSpan, 
	LoginSpanRegular, 
	Menu,
	MobileLink
} from './styles';

import LogoSVG from '../../assets/logo.svg';
import icADD from '../../assets/ic_add.svg';
import icBAG from '../../assets/ic_cart.svg';
import icACC from '../../assets/ic_arrow.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = ({popup, popupStatus, login, history, menuStatus}) => {
	const [showMenu, setShowMenu ] = useState(false)
	
	return (
		<Container>
			<Top>
				{console.log(history)}
				<Logo src={LogoSVG}/>
				<AppTitle>mercadoteste</AppTitle>

				<LinkContainer onClick={menuStatus}>
						<LinkIcon style={{width: 30, height: 20}}src={icMENU}/>
				</LinkContainer>
	
				<RightSide>
					<LinkContainer onClick={() => {popupStatus('login')}}>
						<LinkSpan>Entrar</LinkSpan>
						<LinkIcon style={{marginLeft: 9}} src={icACC}/>
					</LinkContainer>

					<LinkContainer>
						<LinkIcon src={icBAG}/>
					</LinkContainer>

					<Menu onClick={() => {setShowMenu(!showMenu)}} src={icMENU}/>
				</RightSide>
	
			</Top>
			
			{showMenu && (
				<Bottom>
					<MobileLink onClick={menuStatus}>Categorias</MobileLink>
					<MobileLink>Carrinho</MobileLink>
					<MobileLink>Acesse sua conta</MobileLink>
				</Bottom>
			)}

		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
	login: state.login.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
