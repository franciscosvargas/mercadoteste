import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100% !important;
	width: 100%;
	overflow-x: hidden;
`;

export const Name = styled.span`
	color: #383D40;
	font-weight: 500;
	font-size: 20px;
	display: flex;
	margin-top: 20px
	
`
export const Content = styled.div`
	margin-left: 130px;
	margin-top: 50px;

	@media (max-width: 950px) {
		margin-left: 45px;
	}

	@media (max-width: 350px) {
		margin-left: 25px;
	}
`



