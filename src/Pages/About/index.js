import React, { useState, useEffect } from 'react';

import { 
	Container,
	Box,

	SectionTitle,
						
} from '../Cart/styles';

import { Content, Section, Info, Value, Whatsapp, Icon  } from './styles'

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import api from '../../services/api';

import icWhats from '../../assets/ic_whats_blue.svg'

function About({history, popupStatus, logout,  login}) {
	const [company, setCompany] = useState(false)

	useEffect(() => {
		getInfo()
	},[])

	const getInfo = async () => {
		const {data} = await api.get('/about')
		console.log(data)
		setCompany(data)
	}

	return (
		<Container>
			<Top history={history}/>

					<Content>
						<button onClick={history.goBack} className="btnVoltar">{"< Voltar"}</button>
						{company && (
							<Box style={{width: 'calc(100% - 60px)'}}>
								<Section style={{width: '50% !important', flexGrow: '0 !important'}}>
									<SectionTitle>Endereço </SectionTitle>
									<Info style={{marginTop: 20}}>
										{company.address.full}
									</Info>
									

									<Info>Número: {company.address.number}</Info>
									<Info>Bairro: {company.address.bairro}</Info>
									<Info>Cidade: {company.address.city}</Info>
									<Info>Estado: {company.address.uf}</Info>
									<Info>Complemento: {company.address.complement}</Info>
									<Info>CEP: {company.address.cep}</Info>
								</Section>

								<div style={{marginLeft: 15, display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
									<Value>
										<SectionTitle>Telefone</SectionTitle>
										<Info  style={{marginTop: 20}}>
											{company.phone}
										</Info>
									</Value>

									<Value>
										<Info  style={{marginTop: 20}}>
											{company.description}
											
										</Info>
									</Value>

									<div style={{display: 'flex', marginTop: 10}}>
										<Icon src={icWhats}/>
										<Whatsapp>Fale conosco via WhatsApp</Whatsapp>
									</div>
								</div>
								
							</Box>
						)}
					</Content>
			<Footer />
			
		</Container>
	);
}

export default About