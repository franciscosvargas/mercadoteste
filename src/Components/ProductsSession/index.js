import React from 'react';
import { connect } from "react-redux";

import { Container} from './styles';

import Product from '../Product'

const ProductsSession = ({list}) => (
	<Container>

		{list.map((info, index) => <Product key={index} info={info}/>)}
		
	</Container>
);

const mapStateToProps = state => ({
	list: state.products
});

export default connect(mapStateToProps)(ProductsSession)

