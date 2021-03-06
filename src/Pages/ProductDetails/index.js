/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/cart';

import {
  Container,
  Content,
  Box,
  Name,
  Horizontal,
  Price,
  Button,
  ButtonsContainer,
  AddedText,
  SecondaryButton,
  ButtonCart,
  Right,
  SpanQnt
} from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import ImageCarousel from '../../Components/ImageCarousel'

import api from '../../services/api';

function ProductDetails({history, addToCart, removeFromCart, cart}) {
	const [product, setProduct] = useState({})
	const [qnt, setQnt] = useState(false)

	const { id, category } = useParams()

	useEffect(() => {
		getProductData()
	}, [])

	const getProductData = async () => {
		const { data } = await api.get(`/product/${category}/${id}`)
		console.log('individual', data)

		setProduct(data)

		const filter = cart.filter(element => element.id === data.id)

		if(filter[0] && filter[0].qnt > 0) setQnt(filter[0].qnt)
		
	}

	const addAndRefresh = () => {
		addToCart(product)

		setQnt(qnt + 1)
	}

	const removeAndRefresh = () => {
		if(qnt > 0) {
			removeFromCart(product, qnt)
			setQnt(qnt-1)
		}
	}

	return (
		<Container>
			<Top history={history}/>
			
			<Content>

				<button onClick={history.goBack} className="btnVoltar">{"< Voltar"}</button>
				
				<section>
					<Box style={{justifyContent: 'center', marginRight: 32}}>
						<ImageCarousel images={product.images}/>
					</Box>

					<Box style={{flexDirection: 'column', height: '90%'}}>
						<Name>{product.name}</Name>
						<Horizontal>
							<Price>Por: {product.priceFormated}</Price>
							<Right>
								<ButtonCart onClick={() => {removeAndRefresh()}}>-</ButtonCart>
								<SpanQnt>{!qnt ? '0' : qnt}</SpanQnt>
								<ButtonCart onClick={() => {addAndRefresh()}}>+</ButtonCart>
							</Right>
						</Horizontal>

						<ButtonsContainer>
							{qnt > 0 && <AddedText>Adicionado!</AddedText>}
							<Button onClick={() => {addAndRefresh()}} bg="#0466B9" qnt={qnt}>
								{!qnt ? 'Adicionar ao Carrinho': 'Adicionar mais'}
							</Button>
						</ButtonsContainer>
						
						<SecondaryButton onClick={() => history.push(`/category/${product.type}`)}>
							Ver mais produtos
						</SecondaryButton>
					</Box>
				</section>
				
			
				
			</Content>
			<Footer />		
		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
