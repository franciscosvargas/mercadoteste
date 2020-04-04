import styled from 'styled-components';

export const Container = styled.div`
	padding: 28px 0 28px 0;
	background: #FFFFFF;
	display: 'flex';
	justify-content: 'space-between';
	margin: 0px 125px 0px 125px;
	border-radius: 0px 0px 6px 6px;
	box-shadow: 0px 3px 6px #00000029;

	@media (max-width: 950px) {
		margin: 0px 45px 0 45px;
	}

	@media (max-width: 350px) {
		margin: 0px 25px 0 25px;
	}
`;

export const Category = styled.a`
	background: ${props => props.color};
	color: ${props => props.txtcolor ||'#77797B' };
	font-size: 16px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	jusfity-content: center;
	height: 30px;
	padding: 6px 30px 6px 30px;
	margin-left: 6px;
`