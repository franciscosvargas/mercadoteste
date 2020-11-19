import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import QuantitySelector from '../QuantitySelector'
import {
  AddedText,
  AddCartButtonContainer,
  Container,
  CardContent,
  Name,
  Image,
  Button
} from './styles';

import * as actions from '../../store/actions/cart';

const Product = ({info, cart, addToCart, removeFromCart}) => {
	const [qnt, setQnt] = useState(false)

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
			<Image src={info.url}/>
      <CardContent>
        <Name to={`/product/${info.type}/${info.id}`}>{info.name}</Name>
				<QuantitySelector 
					price={info.price} 
					qnt={qnt || 0}
					addAndRefresh={addAndRefresh}
					removeAndRefresh={removeAndRefresh}/>
        <AddCartButtonContainer>
          {qnt && <AddedText>Adicionado!</AddedText>}
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
