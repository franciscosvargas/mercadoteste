import React, {useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Form } from '@unform/web';
import * as actions from '../../../store/actions/login'

import { 
	Container, 
	ButtonClose, 
	Title,
	TextButton, 
	FormButton,
	Error
 } from './styles';

import Input from '../../Input'
import icClose from '../../../assets/ic_cancel.svg';

import api from '../../../services/api'

const Login = ({info, close, loginSuccess, popupStatus}) => {
	const [error, setError] = useState(false)

	const signin = async (info) => {
		const { data } = await api.post('/auth', info)

		if(data.error) return setError(data.error)

		loginSuccess(data)
		popupStatus({name: null, information: null})
	}

	return (
		<Container>
			<ButtonClose  onClick={close} src={icClose}/>
			
			<Title>Acesse sua conta</Title>
			{error && <Error>{error}</Error>}

			<Form onSubmit={signin} style={{display: 'flex', flexDirection: 'column'}}>
				<Input 
					name="cpf" 
					mask="999.999.999-99" 
					maskPlaceholder=" "
					placeholder="CPF" 
					className="login-input"
					required/>
				<Input 
					name="password" 
					placeholder="Senha" 
					type="password" 
					className="login-input"
					required/>
	
				<TextButton>Esqueceu sua senha?</TextButton>
				<FormButton type="submit" className="login-input" bg="#0466B9">Acessar</FormButton>
			</Form>
			
			<span className="or">ou</span>
			<FormButton className="login-input" bg="#59ABF1">Acesse pelo aplicativo</FormButton>
	
			<TextButton>Não tem uma conta?</TextButton>
		</Container>
	);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(Login);