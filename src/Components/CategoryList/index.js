import React, { useState} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as actions from '../../store/actions/products';

import { Container, Category } from './styles';
import Slider from '../Slider';

import api from '../../services/api'

const CategoryList = ({list, popupOpen, refreshProductList}) => {
	const [selected, setSelected] = useState(0)

	const isSelected = (index) => {
		if(selected === index) return true

		return false
	}

	const getProductsByCategory = async (index) => {
		refreshProductList([])
		const category = list[index]
		setSelected(index)

		const { data } = await api.get(`/category/${category}`)
		console.log(data)

		refreshProductList(data)

		
	}
	
	return (
		<Container>
			<Slider
				options={{
					cellAlign: 'center',
					draggable: true,
					groupCells: true,
					contain: false,
					pageDots: false,
				  }}
	
				  style={ popupOpen ? ({opacity: 0.05})  : null}
			>
				{list.map((category, index) => ( 
						isSelected(index) 
						? <Category onClick={() => { getProductsByCategory(index)}} color="#0466B9" txtcolor="#f1f1f1" key={index}>{category}</Category>
						: <Category  onClick={() => { getProductsByCategory(index)}} color="#F1F1F1" key={index}>{category}</Category>
				))}
				
			</Slider>
		</Container>
	);
}

const mapStateToProps = state => ({
	popupOpen: state.popup.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
