import React, { useEffect, useState }from 'react';
import { connect } from "react-redux";
// after


import { Container } from './styles';

import Topbar from '../../Components/TopBar';
import CategoryList from '../../Components/CategoryList';
import Footer from '../../Components/Footer';
import PopUp from '../../Components/PopUp';

import api from '../../services/api';

function ProductDetails() {
	return (
		<Container>
			<PopUp/>
			<Topbar />

			<Footer />		
		</Container>
	);
}

const mapStateToProps = state => ({
	categories: state.products.categories
});

export default ProductDetails;
