import React from 'react';

import { 
	Container, 
	ButtonClose, 
	Title,
	Input, 
	TextButton, 
	FormButton
 } from './styles';

import icClose from '../../../assets/ic_cancel.svg';

const Login = ({info, close}) => (
	<Container>
		<ButtonClose onClick={close} src={icClose}/>
		
		<Title>Acesse sua conta</Title>

		<Input placeholder="CPF" className="login-input"/>
		<Input placeholder="Senha" type="password" className="login-input"/>
		<TextButton>Esqueceu sua senha?</TextButton>

		<FormButton className="login-input" bg="#0466B9">Acessar</FormButton>
		<span className="or">ou</span>
		<FormButton className="login-input" bg="#59ABF1">Acesse pelo aplicativo</FormButton>

		<TextButton>Não tem uma conta?</TextButton>
	</Container>
);

export default Login;