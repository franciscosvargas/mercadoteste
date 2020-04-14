import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100% !important;
	width: 100%;
`;

export const Name = styled.span`
	color: #383D40;
	font-weight: 500;
	font-size: 20px;
	margin-left: 130px;
	margin-top: 50px;
	display: flex;

	@media (max-width: 950px) {
		margin-left: 45px;
	}

	@media (max-width: 350px) {
		margin-left: 25px;
	}
`


