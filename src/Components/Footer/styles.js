import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 75px;
	border-top: 1px solid #77797B;
	padding: 35px 130px 30px 130px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 1100px) {
		justify-content: center;
	}

	@media (max-width: 950px) {
		padding: 35px 50px 0 50px;
		justify-content: center;
	}

	@media (max-width: 350px) {
		padding: 35px 30px 0 30px;
	}
`;

export const AppTitle = styled.span`
	font-weight: 500;
	font-size: 25px;
	color: #77797B;
	margin-right: 50px;
	
`

export const LastUpdate = styled.span`
	color: #77797B;
	font-size: 16px;
	margin-top: 10px;


`

export const Side = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 20px;
	padding-bottom: 20px;
`

export const Link = styled.a`
	display: flex;
	color: #0466B9;
	font-size: 16px;
	align-items: center;
	margin-left: 30px;

	@media (max-width: 460px) {
		margin: 10px 0 0 0;
	}
`

export const Icon = styled.img`
	margin-right: 5px;
`