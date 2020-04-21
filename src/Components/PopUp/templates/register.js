import React, { useState, useRef, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Form } from '@unform/web';
import { Scope } from '@unform/core';

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

function Register({info, close, updateUser, user, popupStatus}) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const formRef = useRef(null)

	const update = async (info) => {
		setLoading(true)
		const {data} = await api.post('/user', info)
		setLoading(false)

		if(data.error) return setError(data.error)
		
		updateUser(info)
		popupStatus({name: null, information: null})
	}

	return (
		<Container >
			<ButtonClose  onClick={close} src={icClose}/>
			
			<Title>Editar meus dados</Title>
			{error && <Error>{error}</Error>}

			<Form onSubmit={update} ref={formRef} className="form">
				<Input 
					name="name" 
					placeholder="Nome completo" 
					className="login-input"
					required/>

				<Input 
					name="cpf" 
					placeholder="CPF" 
					className="login-input"
					mask="999.999.999-99"
					required/>

				<Input 
					name="phone" 
					placeholder="Celular (com DDD)" 
					className="login-input"
					mask="(99)99999.9999"
					required/>

				<Input 
					name="email" 
					type="email"
					placeholder="Email" 
					className="login-input"
					required/>

				<Input 
					name="password" 
					placeholder="Senha" 
					className="login-input"
					required/>

					

				<FormButton type="submit" className="login-input" bg="#0466B9">{!loading ? 'Criar conta' : 'Carregando...'}</FormButton>
			</Form>
		
		</Container>
	);
}

const mapStateToProps = state => ({
	user: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);