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
					<Content>
					
						<Box>
							<Section style={{border: 'none'}}>
								<SectionTitle>Pedidos em Aberto</SectionTitle>
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