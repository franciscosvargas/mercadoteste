import React from 'react';

import { Container, Category } from './styles';

import Slider from '../Slider'

const CategoryList = ({list}) => (
	<Container>
		<Slider
			options={{
				cellAlign: "center",
				draggable: true,
				groupCells: true,
				contain: false,
				pageDots: false
			  }}
		>
			{list.map(category => (
				<Category href={`#/category?k=`+category} key={category}>{category}</Category> 
			))}
		</Slider>
		
	</Container>
);

export default CategoryList;
