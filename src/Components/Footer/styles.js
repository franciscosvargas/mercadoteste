import styled from 'styled-components';

export const Container = styled.div`
	bottom: 0;
	width: (100% - 260px);
	border-top: 1px solid #77797B;
	padding: 30px 130px 30px 130px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 1100px) {
		justify-content: center;
	}

	@media (max-width: 560px) {
		margin-top: 50px;
		position: relative;
	}

	@media (max-width: 700px) {
		padding-top: 20px;
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
`

export const Side = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 20px;
	padding-bottom: 20px;

	@media (max-width: 460px) {
		margin: 10px 0 0 0;
	}

	@media (max-width: 800px) {
		margin: 10px 0 0 0;
	}
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