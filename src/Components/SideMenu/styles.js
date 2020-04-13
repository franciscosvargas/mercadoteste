import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 130%;
	height: 100%;
	display: flex;
	position: fixed !important;
	background: rgba(0,0,0,0.7);
	overflow: hidden;
`
	

export const Menu = styled.div`
	width: 20%;
	padding: 30px;
	background: #fff;
	display: flex;
	flex-direction: column;
	font-size: 28px;

	@media (max-width: 700px) {
		width: 35%;
	}

	@media (max-width: 550px) {
		width: 45%;
	}

	@media (max-width: 450px) {
		width: calc(80% - 30%);
	}

	@media (max-width: 350px) {
		width: calc(100% - 35%);
	}
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	align-self: flex-end;

`

export const Title = styled.span`
	color: #303233;
	font-weight: 700;
	font-size: 32px;
	padding-bottom: 20px;
	margin-top: 40px;
	
`

export const List = styled.div`
	display: flex:
	flex-direction: column;
	height: calc(60%-110px) !important;
	overflow:auto; 

	::-webkit-scrollbar {
		width: 3px;
		background-color: rgba(0,0,0,0.1);
	} 

	::-webkit-scrollbar-thumb {
		background-color: #0466B9;
	}
	
`

export const Category = styled(Link)`
	color: #383D40;
	font-size: 20px;
	margin-top: 20px;
	display: flex;
`

export const Whatsapp = styled(Link)`
	color: #0466B9;
	font-size: 18px;
	margin-left: 10px;
	margin-top: 10px;
	display: flex;
`

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: auto;
	padding-top: 10px;	

`

