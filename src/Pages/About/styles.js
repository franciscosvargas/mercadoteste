import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Content = styled.div`
	padding: 30px 130px 30px 130px;
	
	@media (min-width: 950px) {
		height: calc(100% - 241px);
	}

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
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

	@media (max-width: 808px) {
		border: none;
		margin-bottom: 10px;
	}
`

export const Value = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding-bottom: 20px;
	border-bottom: 1px solid rgba(0,0,0,0.2) !important;
`
export const Whatsapp = styled(Link)`
	color: #0466B9;
	font-size: 18px;
	margin-left: 10px;
	margin-top: 10px;
	display: flex;
`

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	align-self: flex-end;
`