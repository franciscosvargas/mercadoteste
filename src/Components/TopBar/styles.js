import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	background: #0466B9;
	padding: 20px 130px 20px 130px;
	display: flex;
	flex-direction: column;

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}

`;

export const Logo = styled.img`
`

export const AppTitle = styled.span`
	color: #D5F2FB;
	font-size: 22px;
	font-weight: 500;
	margin-left: 7px;
`

export const RightSide = styled.div`
	display: flex;
    margin-left: auto;
    height: 100%;
	justify-content: center;
	align-items: center;
`

export const LinkContainer = styled(Link)`
	display: flex;
	align-items: center;
	margin-left: 40px;

	@media (max-width: 765px) {
		display: none;
	}
`

export const LinkIcon = styled.img`
	margin-right: 5px;
`

export const Menu = styled.img`
	width: 30px;
	height: 30px;
	display: none;

	@media (max-width: 765px) {
		display: flex;
	}
`

export const LinkSpan = styled.span`
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 300;
`


export const LoginSpan = styled.span`
	color: #FFFFFF;
	font-size: 20px;
	font-weight: 300;
	display: flex;
	margin-left: 5px;
`

export const LoginSpanRegular = styled.span`
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 400;
	margin-left: 5px;
`
export const Top = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
`

export const Bottom = styled.div`
	flex-grow: 1;
	display: flex;
	margin-top: 20px;
	flex-direction: column;
	align-items: flex-end;
`

export const MobileLink = styled(Link)`
	font-size: 20px;
	font-weight: 500;
	color: #fff;
	margin-top: 10px;
`