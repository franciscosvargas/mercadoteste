import styled from 'styled-components';

export const Container = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 6px;
	margin: 30px 125px 0px 125px;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 950px) {
		margin: 30px 45px 0 45px;
	}

	@media (max-width: 350px) {
		margin: 30px 25px 0 25px;
	}
`;
