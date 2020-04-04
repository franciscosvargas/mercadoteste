import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed !important;
	background: rgba(0,0,0,0.7);
`;

export const Content = styled.div`
	padding: 30px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	font-size: 28px;
	color: #0466B9;
	font-weight: 500;

	@media (max-width: 660px) {
		font-size: 22px;
		padding: 20px;
	}
`;

export const Button = styled.div`
	background: #0466B9;
	padding: 11px 20px 11px 20px;
	color: #fff;
	font-size: 18px;
	fonr-weight: 400 !important;
	border-radius: 6px;
	margin-top: 41px;
`

export const ButtonClose = styled.img`
	width: 20px;
	height: 20px;
	align-self: flex-end;
	margin-bottom: 30px;
	
`

