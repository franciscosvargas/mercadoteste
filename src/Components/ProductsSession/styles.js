import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 125px 90px 125px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 24px;

	@media (max-width: 950px) {
		margin: 30px 45px 0 45px;
	}

	@media (max-width: 350px) {
		margin: 30px 25px 0 25px;
	}
`;

export const Alert = styled.h2`
	margin: 85px 70px 85px 70px;
	opacity: 0.6;
`
