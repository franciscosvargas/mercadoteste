/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import QuantitySelector from '../QuantitySelector'
import { Link } from 'react-router-dom'


import {
  AddedText,
  AddCartButtonContainer,
  Container,
  CardContent,
  Name,
  ProductImage,
  Button
} from './styles';

import * as actions from '../../store/actions/cart';

const Product = ({info, cart, addToCart, removeFromCart}) => {
	const [ qnt, setQnt ] = useState(false)
	const [ image, setImage ] = useState((info.images && info.images[0]) || null)

	useEffect(() => {
		getProductData()
	}, [])

	const getProductData = async () => {
		const filter = cart.filter(element => element.id === info.id)
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
		<Container>
			<Link to={`/product/${info.type}/${info.id}`}>
				<ProductImage
					src={image} 
					onMouseEnter={() => setImage(info.images[1] || info.images[0])} 
					onMouseLeave={() => setImage(info.images[0])}
					/>
			</Link>
			
      <CardContent>
        <Name to={`/product/${info.type}/${info.id}`}>{info.name}</Name>
				<QuantitySelector 
					price={info.priceFormated} 
					qnt={qnt || 0}
					addAndRefresh={addAndRefresh}
					removeAndRefresh={removeAndRefresh}/>
        <AddCartButtonContainer>
          {qnt > 0 && <AddedText>Adicionado!</AddedText>}
          <Button onClick={() => {addAndRefresh()}} bg="#0466B9">
            {!qnt ? 'Adicionar ao carrinho' : 'Adicionar mais'}
          </Button>
        </AddCartButtonContainer>
      </CardContent>
		</Container>
	)
};

const mapStateToProps = state => ({
	cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Product);
