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
			<ButtonClose  onClick={close} src={icClose}/>
			
			<Title>Editar meus dados</Title>
			{error && <Error>{error}</Error>}

			<Form initialData={user} onSubmit={update} ref={formRef} className="form">
				<Input 
					name="name" 
					placeholder="Nome completo*" 
					className="login-input"
					required/>

				<Input 
					name="cpf" 
					mask="999.999.999-99" 
					maskPlaceholder=" "
					placeholder="CPF*" 
					className="login-input"
					required
					/>
				<Input 
					name="birthdate"
					mask="99/99/9999" 
					maskPlaceholder=" "
					placeholder="Data de Nascimento*" 
					type="text" 
					className="login-input"
					required/>

				<Input 
					name="email"
					placeholder="Email*" 
					type="email" 
					className="login-input"
					required/>

				<Scope path="address">
					<Input 
						name="full"
						placeholder="Endereço*" 
						type="text" 
						className="login-input"/>

					<Input 
						name="bairro"
						placeholder="Bairro*" 
						type="text" 
						className="login-input"
						required/>

					<Input 
						name="number"
						placeholder="Número*" 
						type="text" 
						className="login-input"
						required/>

					<Input 
						name="city"
						placeholder="Cidade*" 
						type="text" 
						className="login-input"
						required/>

					<Input 
						name="uf"
						placeholder="Estado*" 
						type="text" 
						className="login-input"
						required/>

					<Input 
						name="cep"
						mask="99.999-999" 
						maskPlaceholder=" "
						placeholder="CEP*" 
						type="text" 
						className="login-input"
						required/>

					<Input 
						name="complement"
						placeholder="Complemento" 
						type="text" 
						className="login-input"/>
				</Scope>
				

				<Input 
					name="phone"
					placeholder="Telefone*" 
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