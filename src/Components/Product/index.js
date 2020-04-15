import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Name, Image, Price, Button} from './styles';

import * as actions from '../../store/actions/cart';

const Product = ({info, cart, addToCart, removeFromCart}) => {
	const [qnt, setQnt] = useState(false)

	useEffect(() => {
		getProductData()
	}, [])

	const getProductData = async () => {
		const filter = cart.filter(element => element.id === info.id)
		console.log(filter)
		if(filter[0] && filter[0].qnt > 0) setQnt(filter[0].qnt)
	}

	const addAndRefresh = () => {
		addToCart(info)

		setQnt(qnt + 1)
	}

	const removeAndRefresh = () => {
		if(qnt > 0) {
			setQnt(qnt-1)
			removeFromCart(info, qnt)
		}
	}

	return (
		<Container  >
			<Name to={`/product/${info.type}/${info.id}`}>{info.name}</Name>
			<Image src={info.url}/>
			<Price>Por: R${info.price}</Price>

			
			{!qnt ? (
				<Button onClick={() => {addAndRefresh()}} bg="#0466B9">Adicionar ao Carrinho</Button>
			) : (
				<Button onClick={() => {addAndRefresh()}} bg="#EFC800">Adicionado! Adicionar +</Button>
			)}
		</Container>
	)
};

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Product);
