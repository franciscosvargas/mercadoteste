import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Order = styled(Link)`
	background: #F1F1F1;
	color: #77797B;
	padding: 30px 0px 30px 30px;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 20px;
	width: 200px;


`

export const TitleOrder = styled.span`
	font-size: 18px;
`

export const DateOrder = styled.span`
	font-size: 14px;
`