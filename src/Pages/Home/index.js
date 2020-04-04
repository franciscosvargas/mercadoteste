import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/products';

import { Container } from './styles';

import Topbar from '../../Components/TopBar';
import CategoryList from '../../Components/CategoryList';
import ProductsSession from '../../Components/ProductsSession';
import Footer from '../../Components/Footer';
import PopUp from '../../Components/PopUp';

import api from '../../services/api';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			categories: ['TODOS']
		}
	}

	componentDidMount = async () => {
		const { data } = await api.get('/home')

		this.setState({
			categories: [...this.state.categories, ...data.categories],
		})

		this.props.refreshProductList(data.products)

	}

	render() {
		return (
			<Container>
				<PopUp/>
				<Topbar />
				<CategoryList list={this.state.categories} />

				<ProductsSession/>

				<Footer />
				
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	popup: state.popup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);