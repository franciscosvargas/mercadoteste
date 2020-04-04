import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 75px;
	border-top: 1px solid #77797B;
	padding: 35px 130px 30px 130px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;

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
`

export const LastUpdate = styled.span`
	color: #77797B;
	font-size: 16px;
	margin-left: 50px;
`

export const Side = styled.div`
	display: flex;
	align-items: center;
`

export const Link = styled.a`
	display: flex;
	color: #0466B9;
	font-size: 16px;
	align-items: center;
	margin-left: 30px;
`

export const Icon = styled.img`
	margin-right: 5px;
`