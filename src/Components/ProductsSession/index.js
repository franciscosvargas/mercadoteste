import React from 'react';
import { connect } from "react-redux";

import { Container, Alert} from './styles';

import Product from '../Product'

const ProductsSession = ({list, history}) => (
	<Container>

		{list.map((info, index) => <Product history={history} key={index} info={info}/>)}

		{!list[0] && <Alert>Ooops, não encontramos produtos para essa categoria.</Alert>}
		
	</Container>
);

const mapStateToProps = state => ({
	list: state.products.products
});

export default connect(mapStateToProps)(ProductsSession)

