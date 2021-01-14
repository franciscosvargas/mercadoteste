/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../../store/actions/cart';

import { 
	Container,
	Box,
	Section, 
	SectionTitle,
	Alert
} from '../Cart/styles';

import { OrderList, Order, TitleOrder, DateOrder, Content} from './styles'

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';

import api from '../../services/api'

function Orders({history, cart, removeFromCart, popupStatus, login, clearCart, logout}) {
	const [orders, setOrders] = useState(false)

	useEffect(() => {
		getOrders()
	},[])

	const getOrders = async () => {
		if(!login.cpf) return popupStatus({name: 'login'})
		const cpf = login.cpf.replace(/[.-]/g, '',)

		const {data} = await api.get(`/l/orders/${cpf}`)

		console.log('data', data)

		if(data.error) {
			logout()
			return popupStatus({name: 'login'})
		}

		setOrders(data)

	}

	return (
		<Container>
			<Top history={history}/>

			{orders && (
					<Content>
						<button onClick={history.goBack} className="btnVoltar">{"< Voltar"}</button>

						<Box style={{width: 'calc(100% - 60px)'}}>
							<Section style={{border: 'none'}}>
								<SectionTitle>Pedidos em Aberto</SectionTitle>
								{orders.open.length === 0 ? (
									<Alert>Não há pedidos em aberto</Alert>
								) : (
									<OrderList>
									
											{orders.open.map(order => (
												<Order key={order.key} to={`/order?date=${order.date}&key=${order.key}`}>
												<TitleOrder>Ordem {order.personalCode}</TitleOrder>
												<DateOrder>{order.dateFormated}</DateOrder>
												</Order> 
											))}
									</OrderList>
								)}
								
							</Section>
						</Box>

						<Box style={{width: 'calc(100% - 60px)'}}>
							<Section style={{border: 'none'}}>
								<SectionTitle>Pedidos Finalizados</SectionTitle>
								
								{orders.finished.length === 0 ? (
									<Alert>Não há pedidos finalizados</Alert>
								) : (
									<div>
										<OrderList>
											{orders.finished.map(order => (
												<Order key={order.key} to={`/order?date=${order.date}&key=${order.key}`}>
												<TitleOrder>Ordem {order.personalCode}</TitleOrder>
												<DateOrder>{order.dateFormated}</DateOrder>
												</Order> 
											))}
										</OrderList>
									</div>
								)}
								
							</Section>
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