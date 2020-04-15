import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/cart';

import { 
	Container,
	Content,
	Box, 
	List, 
	FirstColumns, 
	FirstLine, 
	Column, 
	Line, 
	ColumnRemove, 
	Image, 
	Name, 
	Product, 
	Alert,
	SectionTitle,
	Span, 
	Button
} from './styles';

import Top from '../../Components/Top';

function Cart({history, cart, removeFromCart}) {
	const [price, setPrice] = useState(0)

	useEffect(() => {
		let value = 0
		cart.map(product => {
			 value = value + (product.price * product.qnt)
			
		})
		setPrice(value)
	}, [cart])

	return (
		<Container>
			<Top history={history}/>

				{cart.length ? (
					<Content>
						<Box>
							<List>
								<tbody>
									<FirstLine>
										<FirstColumns>Itens no carrinho</FirstColumns>
										<FirstColumns>Preço</FirstColumns>
										<FirstColumns>Quantidade</FirstColumns>
										<FirstColumns></FirstColumns>
									</FirstLine>

									{cart.map((product, index) => (
										<Line>
											<Column>
												<Product to={`/product/${product.type}/${product.id}`}>
													<Image src={product.img}/> 
													<Name>{product.name}</Name>
												</Product>
												
											</Column>
											<Column>R$ {product.price}</Column>
											<Column>{product.qnt} UND.</Column>
											<ColumnRemove onClick={() => { removeFromCart(product, 1)}} >Excluir</ColumnRemove>
										</Line>
									))}
								</tbody>
							</List>
						</Box>

						<Box>
							<SectionTitle>Custo da compra</SectionTitle>
							<Span>*Taxas se aplicam de acordo com o método de pagamento</Span>		
							<SectionTitle>R$ {price.toFixed(2)}</SectionTitle>				
						</Box>

						<Button bg="#00B755">Executar compra</Button>
					</Content>

				) : (
					<Content>
						<Box>
						<Alert>Seu carrinho está vazio...</Alert>
					</Box>

					</Content>
					
				)}
			
		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart,
	login: state.login.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)