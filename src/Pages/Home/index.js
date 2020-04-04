import React, { Component } from 'react';

import { Container } from './styles';

import Topbar from '../../Components/TopBar';
import CategoryList from '../../Components/CategoryList';
import ProductsSession from '../../Components/ProductsSession';
import Footer from '../../Components/Footer';

export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			categorys: ['Automotivo', 'Cama', 'Mesa', 'Banho']
		}
	}
	

	render() {
		return (
			<Container>
				<Topbar />

				<CategoryList list={this.state.categorys} />

				<ProductsSession/>

				<Footer />
				
			</Container>
		);
	}
}

