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
	Menu,
	MobileLink
} from './styles';

import LogoSVG from '../../assets/logo.svg';
import icBAG from '../../assets/ic_cart.svg';
import icACC from '../../assets/ic_arrow.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = ({popup, popupStatus, login, history, menuStatus}) => {
	const [showMenu, setShowMenu ] = useState(false)
	
	const openDialog = () => {
		if(!login) {
			popupStatus({name: 'login'})
		} else {
		}
	}


	return (
		<Container>
			<Top>
				<Logo src={LogoSVG}/>
				<AppTitle>mercadoteste</AppTitle>

				<LinkContainer onClick={menuStatus}>
					<LinkIcon style={{width: 30, height: 20}}src={icMENU}/>
				</LinkContainer>
				
	
				<RightSide>
					{!login ? (
						<LinkContainer onClick={openDialog}>
							<LinkSpan>Entrar</LinkSpan>
							<LinkIcon style={{marginLeft: 9}} src={icACC}/>
						</LinkContainer>
					) : (

						<div style={{display: 'flex'}}>
							<LinkContainer onClick={() => {popupStatus({name: 'editData'})}}>
								<LinkSpan>Meus Dados</LinkSpan>
							</LinkContainer>

							<LinkContainer to="/orders">
								<LinkSpan>Meus Pedidos</LinkSpan>
							</LinkContainer>
						</div>
						
					)}
					

					<LinkContainer to="/cart">
						<LinkIcon src={icBAG}/>
					</LinkContainer>

					<Menu onClick={() => {setShowMenu(!showMenu)}} src={icMENU}/>

					
				</RightSide>
	
			</Top>
			
			{showMenu && (
				<Bottom>
					<MobileLink onClick={menuStatus}>Categorias</MobileLink>
					<MobileLink to="/cart">Carrinho</MobileLink>
					{!login ? (
						<MobileLink onClick={openDialog}>Acesse sua conta</MobileLink>
					) : (
						<div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
							<MobileLink onClick={() => {popupStatus({name: 'editData'})}}>Meus Dados</MobileLink>
							<MobileLink to="/orders">Meus Pedidos</MobileLink>
						</div>
					)}
				</Bottom>
			)}

		</Container>
	);

}

const mapStateToProps = state => ({
	popup: state.popup,
	login: state.login.user.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
