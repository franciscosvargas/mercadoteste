import React from 'react';
import { connect } from "react-redux";

import { Container, Category } from './styles';

import Slider from '../Slider'

const CategoryList = ({list, popupOpen}) => {

	
	return (
		<Container>
			<Slider
				options={{
					cellAlign: "center",
					draggable: true,
					groupCells: true,
					contain: false,
					pageDots: false
				  }}
	
				  style={ popupOpen ? ({opacity: 0.05})  : null}
			>
				{list.map(category => (
					<Category href={`#/category?k=`+category} key={category}>{category}</Category> 
				))}
			</Slider>
			
		</Container>
	);
}

const mapStateToProps = state => ({
	popupOpen: state.popup.open
});

export default connect(mapStateToProps)(CategoryList)
