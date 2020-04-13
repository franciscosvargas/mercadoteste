import React, { useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actions from '../../store/actions/products';

import { Container, Category } from './styles';

import api from '../../services/api'

const CategoryList = ({list, popupOpen, refreshProductList}) => {
	const [selected, setSelected] = useState(0)

	const isSelected = (index) => {
		if(selected === index) return true

		return false
	}

	const getProductsByCategory = async (index) => {
		const category = list[index]
		setSelected(index)

		const { data } = await api.get(`/category/${category}`)
		console.log(data)

		refreshProductList(data)
	}
	
	return (
		<Container>
			
				{list.map((category, index) => ( 
						isSelected(index) 
						? <Category onClick={() => { getProductsByCategory(index)}} color="#0466B9" txtcolor="#f1f1f1" key={index}>{category}</Category>
						: <Category  onClick={() => { getProductsByCategory(index)}} color="#F1F1F1" key={index}>{category}</Category>
				))}

	
		</Container>
	);
}

const mapStateToProps = state => ({
	popupOpen: state.popup.open,
	list: state.products.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
