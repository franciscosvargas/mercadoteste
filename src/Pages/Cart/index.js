import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form } from "@unform/web";

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
	Section,
	SectionTitle,
	Span, 
	Button, 
	ButtonOutlined,
	Address,
	AddressSpan
} from './styles';

import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import Slider from '../../Components/Slider';
import Input from '../../Components/Input';

import icPlay from '../../assets/ic_play.png'

import api from '../../services/api'

function Cart({history, cart, removeFromCart, popupStatus, login, clearCart, logout}) {
	const [price, setPrice] = useState(0)
	const [finish, setFinish] = useState(false)
	const [addresses, setAddresses] = useState(false)
	const [paymentMethod, setPaymentMethod] = useState({card: false, boleto: false, selected: false})
	const [addressSelected, setAddressSelected ] = useState(false)
	const [newAddress, setNewAddress] = useState(false)
	const [getOnStore, setGetOnStore] = useState(false)

	useEffect(() => {
		let value = 0
		cart.map(product => {
			 value = value + (product.price * product.qnt)
			
		})
		setPrice(value)
	}, [cart, addresses])

	const run = async () => {
		if(!login.cpf) return popupStatus({name: 'login'})

		setFinish(true)

		const {data} = await api.get(`/l/addresses/${login.cpf}`)

		if(data.error) {
			logout()
			return popupStatus({name: 'login'})
		}
		
		if(login.address.full) data.push({address: login.address})

		if(data.length > 0) setAddresses(data)
	}

	const selectPayMethod = (method) => {
		if(method === 'card') {
			setPaymentMethod({card: true, boleto: false, selected: true})
		} else {
			setPaymentMethod({card: false, boleto: true, selected: true})
		}
	}

	const addAddress = async (address) => {
		await api.post('/l/addresses', {cpf: login.cpf, address})
		
		run()
		setAddressSelected(null)
		setNewAddress(false)
	}

	const isSelected = (index) => {
		if(addressSelected === (index + 1)) return true

		return false
	}

	const createOrderFromAddress = async() => {
		const address = addresses[addressSelected - 1]

		let methodToExclude = ''

		if(!paymentMethod.boleto) {
			methodToExclude = 'BOLETO'
		} else {
			methodToExclude = 'CREDIT_CARD'
		}

		const {data} = await api.post('/l/order', 
			{
				cpf: login.cpf, 
				delivery: { methodToExclude, address: address.address, deliveryDate: '' },
				cart,
				getOnStore: false
			}
		)

		clearCart()

		window.location = `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${data.code}`
	}

	const createOrderToGetOnStore = async(info) => {
		const address = "**RETIRAR NA LOJA**"

		let deliveryDate = `${info.date}-${info.hour}:00`

		let methodToExclude = ''

		if(!paymentMethod.boleto) {
			methodToExclude = 'BOLETO'
		} else {
			methodToExclude = 'CREDIT_CARD'
		}

		const {data} = await api.post('/l/order', 
			{
				cpf: login.cpf, 
				delivery: { deliveryDate, address, methodToExclude },
				cart,
				getOnStore: true
			}
		)

	

		clearCart()

		window.location = `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${data.code}`
	}

	return (
		<Container>
			<Top history={history}/>

				{cart.length ? (
					<Content>

						{/* List of products in cart */}
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

						{/* Total price and payment methods */}
						<Box>
							{/* Total price */}
							<Section>
								<SectionTitle>Valor da compra</SectionTitle>
								<Span>*Taxas se aplicam de acordo com o método de pagamento</Span>
								<SectionTitle>R$ {price.toFixed(2)}</SectionTitle>
							</Section>
								
							{/* Payment Methods */}
							{finish && (
								<div style={{display: 'flex'}}>
									{/* Site payment methods */}
									<Section style={{marginLeft: 20}}>
										<SectionTitle>Forma de Pagamento</SectionTitle>
										<div>

											<ButtonOutlined 
												onClick={() => {selectPayMethod('card')}}
												className={paymentMethod.card && 'selected'}>
													Cartão de Crédito
											</ButtonOutlined>
										</div>
									</Section>	

									{/* App payment methods */}
									<Section style={{marginLeft: 20, border: 'none'}}>
										<Span className="marginBottomSpan">Escolha outras formas de</Span>
										<Span className="marginTopSpan">pagamento em nosso app.</Span>
										<img alt="Icone PlayStore" width="167px" src={icPlay}/>
									</Section>
								</div>
							)}
						</Box>

						{!finish ? (
							<Button onClick={run} bg="#00B755">Executar compra</Button>
						) : null }

						
						{paymentMethod.selected && (
							<div>
								{(!getOnStore && addresses )&& (
									<Box>
										<Section style={{border: 0}}>
											<SectionTitle>Defina um endereço para entrega</SectionTitle>
											<div className="addresses">
												
													{addresses.map(({address}, index) => (
														isSelected(index) ? (
															<Address className="selected-address" onClick={() => setAddressSelected(index + 1)}>
																<AddressSpan>Endereço: {address.full}</AddressSpan>
																<AddressSpan>Número: {address.number}</AddressSpan>
																<AddressSpan>Bairro: {address.bairro}</AddressSpan>
																<AddressSpan>Cidade: {address.city}</AddressSpan>
																<AddressSpan>Estado: {address.uf}</AddressSpan>
																<AddressSpan>CEP: {address.cep}</AddressSpan>
															</Address>
														) : (
															<Address onClick={() => setAddressSelected(index + 1)}>
																<AddressSpan>Endereço: {address.full}</AddressSpan>
																<AddressSpan>Número: {address.number}</AddressSpan>
																<AddressSpan>Bairro: {address.bairro}</AddressSpan>
																<AddressSpan>Cidade: {address.city}</AddressSpan>
																<AddressSpan>Estado: {address.uf}</AddressSpan>
																<AddressSpan>CEP: {address.cep}</AddressSpan>
															</Address>
														)
														
													))}

											</div>
										</Section>
									</Box>
								)}

								{(newAddress || !addresses)&& (
									<Box>
										<Section>
											<SectionTitle>Novo Endereço</SectionTitle>
											<Form onSubmit={addAddress} style={{flexWrap: 'wrap', display: 'flex'}}>
												<Input 
													name="full"
													placeholder="Endereço*" 
													type="text" 
													className="address-input max-width"/>

												<Input 
													name="number"
													placeholder="Número*" 
													type="text" 
													style={{width: '15%'}}
													className="address-input"
													required/>

												<Input 
													name="bairro"
													placeholder="Bairro*" 
													type="text" 
													className="address-input"
													style={{width: '44%'}}
													required/>

												

												<Input 
													name="city"
													placeholder="Cidade*" 
													type="text" 
													className="address-input"
													required/>

												<Input 
													name="uf"
													placeholder="Estado*" 
													type="text" 
													className="address-input"
													required/>

												<Input 
													name="cep"
													mask="99.999-999" 
													maskPlaceholder=" "
													placeholder="CEP*" 
													type="text" 
													className="address-input"
													required/>

												<Input 
													name="complement"
													placeholder="Complemento" 
													type="text" 
													className="address-input"
													style={{width: '38%'}}/>
												
												<div>
													<Button type="submit" style={{marginRight: 20}} bg="#0466B9">Adicionar</Button>
													<Button onClick={() => {setNewAddress(false)}}  bg="#59ABF1">Cancelar</Button>
												</div>
												
											</Form>
										</Section>
									</Box>
								)}

								{getOnStore && (
									<Box>
										<Section>
											<SectionTitle>Retirar na loja</SectionTitle>
											<Form onSubmit={createOrderToGetOnStore} style={{flexWrap: 'wrap', display: 'flex'}}>
												<Input 
													name="date"
													placeholder="Data de Retirada*"
													mask="99-99-9999" 
													type="text" 
													className="address-input"/>

												<Input 
													name="hour"
													placeholder="Horário de Retirada" 
													mask="99:99" 
													type="text" 
													style={{width: '15%'}}
													className="address-input"
													required/>
												
												<div>
													<Button type="submit" style={{marginRight: 20}} bg="#00B755">Finalizar</Button>
													<Button onClick={() => {setGetOnStore(false)}}  bg="#59ABF1">Cancelar Retirada</Button>
												</div>
												
											</Form>
										</Section>
									</Box>
								)}

								{(!newAddress && !getOnStore)&& (
									<div>
										<Button onClick={() => {setNewAddress(true)}} style={{marginRight: 20}} bg="#0466B9">Novo Endereço</Button>
										<Button onClick={() => {setGetOnStore(true)}} style={{marginRight: 20}} bg="#59ABF1">Retirar na loja</Button>
										{addressSelected  && <Button onClick={createOrderFromAddress} bg="#00B755">Executar compra</Button>}
									</div>
								)}

								
								
							</div>
						)}

						
					</Content>

				) : (
					<Content style={{height: 'calc(100% - 261px)'}}>
						<Box>
						<Alert>Seu carrinho está vazio...</Alert>
					</Box>

					</Content>
				)}

				<Footer />
			
		</Container>
	);
}

const mapStateToProps = state => ({
	cart: state.cart,
	login: state.login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
