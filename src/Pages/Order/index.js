/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";

import * as actions from '../../store/actions/cart';

import { 
	Container,
	Box,

	SectionTitle,
						
} from '../Cart/styles';

import { Content, Section, Title,  Column, Line, List, Status, Name, Info, Value  } from './styles'

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import api from '../../services/api';

import Calcula from '../../services/calcula'

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Orders({history, popupStatus, logout,  login}) {
	const [order, setOrder] = useState(false)
	let query = useQuery();

	useEffect(() => {
		getOrder()
	},[])

	const getOrder = async () => {
		if(!login.cpf) return popupStatus({name: 'login'})

		const date = query.get("date")
		const key = query.get("key")

		const {data} = await api.get(`/l/order?date=${date}&id=${key}`)


		if(data.error) {
			logout()
			return popupStatus({name: 'login'})
		}

		setOrder(data)
	}

	return (
		<Container>
			<Top history={history}/>

				{order && (
					<Content>
						<Box>
							<Section style={{border: 0}}>
								<div style={{display: 'flex', paddingBottom: 20, borderBottom: '1px solid rgba(0,0,0,0.1)'}}>
									<Title>Pedido {order.personalCode}</Title>
									<Status color="#00B755">{order.status}</Status>
								</div>

								<List> 
								<tbody>
									{order.products.map((product, index) => (
										<Line key={index}>
											<Column>
												<Name style={{margin: '0 !imporant'}}>{product.name}</Name>
											</Column>
											<Column>{Calcula.formatMoney(product.price, "R$ ", 2, ".", ",")}</Column>
											<Column>{product.und} UND.</Column>
										</Line>
									))}
								</tbody>
							</List>
							</Section>
						</Box>

						<Box>
							<Section style={{width: '50% !important', flexGrow: '0 !important', marginRight: 15}}>
								<SectionTitle>Endereço para entrega</SectionTitle>
								<Info style={{marginTop: 20}}>
									Endereço: {order.addressDelivery.full}
								</Info>

								<Info>Número: {order.addressDelivery.number}</Info>
								<Info>Bairro: {order.addressDelivery.bairro}</Info>
								<Info>Cidade: {order.addressDelivery.city}</Info>
								<Info>Estado: {order.addressDelivery.uf}</Info>
								<Info>Complemento: {order.addressDelivery.complement}</Info>
								<Info>CEP: {order.addressDelivery.cep}</Info>
							</Section>
							<div style={{marginLeft: 0, display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
								<Section style={{borderBottom: '1px solid rgba(0,0,0,0.2) !important', borderRight: 'none'}}>
									<SectionTitle>Data de entrega/retirada</SectionTitle>
									<Info  style={{marginTop: 20}}>
										{order.deliveryDate ? 
											order.deliveryDate :
											'Ainda não disponível'
										}
									</Info>
								</Section>

								<Section style={{borderBottom: '1px solid rgba(0,0,0,0.2) !important', borderRight: 'none'}}>
									<SectionTitle>Forma de pagamento</SectionTitle>
									<Info  style={{marginTop: 20}}>
										{!order.source ? 
											`Cartão de crédito` :
											'Pagamento'
										}
										
										{!order.source ? 
											<b> via PagSeguro</b> :
											<b> via App</b>
										}
										
									</Info>
								</Section>
							</div>
							
						</Box>

						<Box className="prices">
							<Value>
								<SectionTitle>Custo de Entrega</SectionTitle>
								<Info style={{marginLeft: 'auto'}}>{Calcula.formatMoney(order.priceDelivery, "R$ ", 2, ".", ",")}</Info>

							</Value>

							<Value>
								<SectionTitle>Valor da compra</SectionTitle>
								<Info style={{marginLeft: 'auto'}}>{Calcula.formatMoney(order.priceProducts, "R$ ", 2, ".", ",")}</Info>
							</Value>

							<Value style={{borderTop: '1px solid rgba(0,0,0,0.2)', paddingTop: 20}}>
								<SectionTitle>Valor TOTAL</SectionTitle>
								<SectionTitle style={{marginLeft: 'auto'}}>{Calcula.formatMoney(order.priceTotal, "R$ ", 2, ".", ",")}</SectionTitle>
							</Value>
							
						</Box>

						
						
					</Content>
				)}

			<Footer />
			
		</Container>
	);
}

const mapStateToProps = state => ({
	login: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Orders)