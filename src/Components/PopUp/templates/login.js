import React, {useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Form } from '@unform/web';
import * as actions from '../../../store/actions/login';

import { 
	Container, 
	ButtonClose, 
	Title,
	TextButton, 
	FormButton,
	Error,
	Header, 

 } from './styles';

import Input from '../../Input';
import icClose from '../../../assets/ic_cancel.svg';

import api from '../../../services/api'

const Login = ({info, close, loginSuccess, popupStatus, redirectPopup}) => {
	const [error, setError] = useState(false)

	const signin = async (info) => {
		const { data } = await api.post('/auth', info)

		console.log(data)
		if(data.error) return setError(data.error)

		loginSuccess(data)
		popupStatus({name: null, information: null})
	}

	return (
		<Container>

			<Header>
				<Title>Acesse sua conta</Title>
				<ButtonClose  onClick={close} src={icClose}/>
			</Header>
			
			{error && <Error>{error}</Error>}

			<Form onSubmit={signin} style={{display: 'flex', flexDirection: 'column'}}>
				<Input 
					name="cpf"
					span="CPF"
					mask="999.999.999-99" 
					maskPlaceholder="_"
					placeholder="___.___.___-__" 
					className="login-input"
					required/>

				<Input 
					name="password"
					span="Senha"
					placeholder="*********" 
					type="password" 
					className="login-input"
					required/>
	
				<TextButton>Esqueceu sua senha?</TextButton>
				<FormButton type="submit" className="login-input" bg="#0466B9">Acessar</FormButton>
			</Form>
			
			<span className="or">ou</span>
			<FormButton className="login-input" bg="#59ABF1">Acesse pelo aplicativo</FormButton>
	
			<TextButton style={{marginTop: 25 }} onClick={() => {redirectPopup({name: 'register'})}}>Não tem uma conta?</TextButton>
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Login);