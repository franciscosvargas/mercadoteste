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
	Error,
	Header, 
	InputSpan
 } from './styles';

import Input from '../../Input'
import icClose from '../../../assets/ic_cancel.svg';

import api from '../../../services/api'

function Login({info, close, updateUser, user}) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)

	const formRef = useRef(null)

	const update = async (info) => {
		setLoading(true)
		const {data} = await api.put('/l/user', info)
		setLoading(false)

		if(data.error) return setError('Erro ao editar as informações do usuário. Faça login novamente.')
		
		updateUser(info)
		setSuccess(true)

	}

	return (
		<Container >

			<Header>
				<Title>Editar meus dados</Title>
				<ButtonClose  onClick={close} src={icClose}/>

			</Header>
			
			{error && <Error>{error}</Error>}

			<Form initialData={user} onSubmit={update} ref={formRef} className="form">
				<InputSpan>Nome completo *</InputSpan>
				<Input 
					name="name" 
					placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
					className="login-input"
					required/>

				<InputSpan>CPF *</InputSpan>
				<Input 
					name="cpf" 
					mask="999.999.999-99" 
					maskPlaceholder="_"
					placeholder="___.___.___-__" 
					className="login-input"
					required
					/>

				<InputSpan>Data de Nascimento *</InputSpan>
				<Input 
					name="birthdate"
					mask="99/99/9999" 
					maskPlaceholder="_"
					placeholder="__/__/____" 
					type="text" 
					className="login-input"
					required/>

				<InputSpan>Email *</InputSpan>
				<Input 
					name="email"
					placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
					type="email" 
					className="login-input"
					required/>

				<Scope path="address">
					<InputSpan>Endereço *</InputSpan>
					<Input 
						name="full"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"/>

					<InputSpan>Bairro *</InputSpan>
					<Input 
						name="bairro"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"
						required/>

					<InputSpan>Número *</InputSpan>
					<Input 
						name="number"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"
						required/>

					<InputSpan>Cidade *</InputSpan>
					<Input 
						name="city"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"
						required/>

					<InputSpan>Estado *</InputSpan>
					<Input 
						name="uf"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"
						required/>

					<InputSpan>CEP *</InputSpan>
					<Input 
						name="cep"
						mask="99.999-999" 
						maskPlaceholder="_"
						placeholder="__.___-___" 
						type="text" 
						className="login-input"
						required/>

					<InputSpan>Complemento </InputSpan>
					<Input 
						name="complement"
						placeholder="_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _" 
						type="text" 
						className="login-input"/>
				</Scope>
				

				<InputSpan>Celular com DDD *</InputSpan>
				<Input 
					name="phone"
					placeholder="(__)_____-____" 
					type="text" 
					className="login-input"
					mask="(99)99999.9999" 
					maskPlaceholder=" "/>

				{!success ? (
					<FormButton type="submit" className="login-input" bg="#0466B9">{!loading ? 'Salvar alterações' : 'Carregando...'}</FormButton>
				) : <FormButton className="login-input" bg="#00B755">Informações salvas com sucesso</FormButton> }

				
			</Form>
			
			
		
		</Container>
	);
}

const mapStateToProps = state => ({
	user: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);