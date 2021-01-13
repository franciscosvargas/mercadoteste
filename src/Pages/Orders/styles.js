import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
	padding: 30px 130px 30px 130px;
	width: calc(100% - 60px);

	@media (min-width: 950px) {
		height: calc(100% - 231px);
	}

	@media (max-width: 950px) {
		padding: 20px 30px 20px 30px;
	}

	@media (max-width: 350px) {
		padding: 20px 10px 20px 10px;
	}
`

export const Order = styled(Link)`
	background: #F1F1F1;
	color: #77797B;
	padding: 30px 30px 30px 30px;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 20px;
	max-width: 200px;
	min-width: 150px;
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