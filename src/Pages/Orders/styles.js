import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
	padding: 0px 130px 30px 130px;
	height: calc(100% - 231px);

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
`

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
	margin-top: 20px;


`

export const TitleOrder = styled.span`
	font-size: 18px;
`

export const DateOrder = styled.span`
	font-size: 14px;
`

export const OrderList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`