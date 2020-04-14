import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const Container = styled.a`
	width: 230px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	flex-grow: 1;
`;

export const Name = styled(Link)`
	color: #383D40;
	font-size: 18px;
	height: 44px;
	align-self: flex-start;
`

export const Image = styled.img`
	margin-top: 18px;
	width: 134px;
	height: 134px;
`

export const Price = styled.span`
	font-weight: 700;
	font-size: 16px;
	color: #383D40;
	align-self: start;
	margin-top: 40px;
`

export const Button = styled.span`
	width: 100%;
	background: #0466B9;
	height: 32px;
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 300;
	border-radius: 6px;
	display:flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
`
