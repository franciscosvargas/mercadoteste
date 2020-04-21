import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Content = styled.div`
	padding: 0px 130px 30px 130px;
	
	

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
`

export const Title = styled.span`
	font-size: 17px;
	color: #303233;
	font-weight: 700;
`
export const Status = styled.span`
	font-size: 17px;
	margin-left: 36px;
	color: ${props => props.color};
`

export const List = styled.table`
	margin: 0;
	width: 100%;
	align: left;
`

export const Line = styled.tr`
`

export const Column = styled.td`
	padding: 15px 0 15px 0;
	border-bottom: 1px solid rgba(255,255,255,0.8);
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	align: center;
	color: #383D40;
`

export const Name = styled.span`
	font-weight: 300;
	font-size: 18px;
	color: #383D40;
`

export const Info = styled.span`
	color: #383D40;
	font-size: 18px;
`

export const Section = styled.div`
	display: flex;
	padding: 10px 20px 10px 10px;
	flex-direction: column;
	border-right: 1px solid rgba(0,0,0,0.2);
	flex-grow: 1;
`

export const Value = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
`