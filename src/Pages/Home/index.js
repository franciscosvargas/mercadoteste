import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from '../../store/actions/products';

import { Container } from './styles';

import Topbar from '../../Components/TopBar';
import SideMenu from '../../Components/SideMenu';
import ProductsSession from '../../Components/ProductsSession';
import Footer from '../../Components/Footer';
import PopUp from '../../Components/PopUp';

import api from '../../services/api';

class Home extends Component {
 	componentDidMount = async () => {
		const { data } = await api.get('/home')

		this.props.setUserName('alisson')
		this.props.refreshCategoryList(data.categories)
		this.props.refreshProductList(data.products)
	}

	render() {
		return (
			<Container>
				<PopUp/>
				<SideMenu history={this.props.history} />
				<Topbar />
				<ProductsSession history={this.props.history}/>
				<Footer />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	popup: state.popup,
	categories: state.products.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);