import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	height: 100% !important;
	width: 100%;
`;

export const Content = styled.div`
	width: calc(100%-260px);
	
	display: flex;
	padding: 30px 130px 0px 130px;
	flex-wrap: wrap;
	margin-bottom: 100px;


	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
		
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
`

export const Box = styled.div`
	padding: 20px;
	margin-top: 30px;
	background: #fff;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 6px;
	display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
`

export const List = styled.table`
	margin: 10px;
	flex-grow: 1;
`

export const FirstLine = styled.tr`
	color: #303233;
	font-weight: 700;
	font-size: 18px;
`

export const FirstColumns = styled.td`
	padding: 15px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	align: left;
	color: #303233;
`

export const Line = styled.tr`
`

export const Column = styled.td`
	padding: 15px;
	border-bottom: 1px solid rgba(255,255,255,0.8);
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	align: center;
	color: #383D40;
`


export const ColumnRemove = styled.th`
	padding: 15px;
	border-bottom: 1px solid rgba(255,255,255,0.8);
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	color: #F63E3E;
	border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const Image = styled.img`
	width: 60px;
	max-height: 70px;
`

export const Name = styled.span`
	margin-left: 20px;
	font-weight: 300;
	font-size: 18px;
	color: #383D40;
`

export const Product = styled(Link)`
	display: flex;
	align-items: center;
	color: #383D40;
	font-size: 18px;
`

export const Alert = styled.p`
	opacity: 0.6;
	position: initial;
	font-weight: 700;
	font-size: 20px;
	display: flex;
`

export const Section = styled.div`
	display: flex;
	padding: 10px 20px 10px 10px;
	flex-direction: column;
	border-right: 1px solid rgba(0,0,0,0.2);
	flex-grow: 1;
`

export const SectionTitle = styled.span`
	color: #303233;
	font-weight: 700;
	font-size: 18px;
`

export const Span = styled.span`
	color: #77797B;
	font-size: 14px;
	margin-top: 12px;
	margin-bottom: 20px;
`

export const Button = styled.button`
	height: 52px;
	padding: 10px;
	color: #fff;
	border-radius: 6px;
	font-size: 18px;
	background: ${props => props.bg};
	margin-top: 20px;
`

export const ButtonOutlined = styled.button`
	height: 52px;
	padding: 10px;
	color: #0466B9;
	border-radius: 6px;
	font-size: 14px;
	background: none;
	border: 1px solid #0466B9;
	margin-top: 20px;
	margin-right: 10px;
`

export const Address = styled.div`
	padding: 20px;
	border-radius: 6px;
	border: 1px solid #77797B;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	flex-grow: 1;
	color: #77797B;
	opacity: 0.7;

	:hover {
		border: 1px solid #0466B9 !important;
		color: #0466B9 !important;
		opacity: 0.9;
	}
`

export const AddressSpan = styled.span`
	margin-top: 5px;
	font-size: 14px;
`

export const InputSpan = styled.span`
	color: #0466B9;
	font-size: 18px;
	margin-top: 15px;
	margin-bottom: 5px;
`

