import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";

import * as actions from '../../store/actions/cart';

import { 
	Container,
	Content,
	Box,
	Section, 
	SectionTitle,
	Alert
} from '../Cart/styles';

import { Order, TitleOrder, DateOrder } from './styles'

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Slider';

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

		if(data.error) {
			logout()
			return popupStatus({name: 'loginS'})
		}

		setOrders(data)
	}

	return (
		<Container>
			<Top history={history}/>

				{orders && (
					<Content>
					
						<Box>
							<Section style={{border: 'none'}}>
								<SectionTitle>Pedidos em Aberto</SectionTitle>
								{!orders.open.length ? (
									<Alert>Não há pedidos finalizados</Alert>
								) : (
									<div>
										<Slider
											options={{
												cellAlign: 'center',
												draggable: true,
												groupCells: true,
												contain: false,
												pageDots: false,
											}}
										>
											{orders.open.map(order => (
												<Order key={order.key} to={`/order/${order.key}`}>
												<TitleOrder>Ordem {order.personalCode}</TitleOrder>
												<DateOrder>08/02 às 11:57</DateOrder>
											</Order> 
											))}
										</Slider>
									</div>
								)}
								
							</Section>
						</Box>

						<Box>
							<Section style={{border: 'none'}}>
								<SectionTitle>Pedidos Finalizados</SectionTitle>
								
								{!orders.finished.length ? (
									<Alert>Não há pedidos finalizados</Alert>
								) : (
									<div>
										<Slider
											options={{
												cellAlign: 'center',
												draggable: true,
												groupCells: true,
												contain: false,
												pageDots: false,
											}}
										>
											{orders.finished.map(order => (
												<Order>
												<TitleOrder>Ordem {order.personalCode}</TitleOrder>
												<DateOrder>08/02 às 11:57</DateOrder>
											</Order> 
											))}
										</Slider>
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