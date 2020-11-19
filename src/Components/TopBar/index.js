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
	MobileLink,
	Button

} from './styles';

import LogoSVG from '../../assets/logo.svg';
import icBAG from '../../assets/ic_cart.svg';
import icACC from '../../assets/ic_arrow.svg';
import icMENU from '../../assets/ic_menu.svg';

const TopBar = ({ popup, popupStatus, login, logout, history, menuStatus }) => {
	const [showMenu, setShowMenu ] = useState(false)
	
	const openDialog = () => {
		if (!login) {
			popupStatus({ name: 'login' })
		}
	}

	const openDialogSignUp = () => {
		
			popupStatus({ name: 'register' })
	}


	return (
		<Container>
			<Top>
				<LinkContainer onClick={menuStatus}>
					<LinkIcon style={{width: 30, height: 20}}src={icMENU}/>
				</LinkContainer>

        <Logo src={LogoSVG}/>
				<AppTitle>mercadoteste</AppTitle>
	
				<RightSide>
					{!login ? (

						<div className="dropdown">
							<LinkSpan  to="#" className="dropbtn">Entrar</LinkSpan>
						 	<LinkIcon src={icACC}/>
							<div className="dropdown-content">
								<Button onClick={openDialog}>Entrar</Button>
								<LinkSpan onClick={openDialogSignUp} to="#">Não tem uma conta?</LinkSpan>
							</div>
						</div>
					) : (

						<div className="dropdown">
								<LinkSpan className="dropbtn">{login.split(" ")[0]}</LinkSpan>
								<div className="dropdown-content">
									<LinkSpan to="#" onClick={() => {popupStatus({name: 'editData'})}}>Meus dados</LinkSpan>
									<LinkSpan to="/orders">Meus pedidos</LinkSpan>
									<LinkSpan to="#" onClick={logout}>Sair da conta</LinkSpan>
								</div>
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
