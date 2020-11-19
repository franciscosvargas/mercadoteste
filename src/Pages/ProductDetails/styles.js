import styled from 'styled-components';

export const Container = styled.div`
	height: 100% !important;
	width: 100%;
`;

export const Content = styled.div`
	width: calc(100%-260px);
	
	display: flex;
	justify-content: space-between;
	padding: 30px 130px 0px 130px;
	flex-wrap: wrap;


	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
		
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
`;

export const Box = styled.div`
	margin-top: 20px;
	flex-grow: 1;
	padding: 30px;
	background: #fff;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 6px;
	display: flex;

	@media (max-width: 1250px) {
		margin-right: 0px !important;
	}

	@media (min-width: 950px) {
		margin-bottom: 100px;
	}

	@media (max-width: 950px) {
		width: 60%;
	}

	@media (max-width: 650px) {
		width: 90%;
	}
`

export const Image = styled.img`
	max-width: 90%;

	@media (max-width: 950px) {
		max-width: 20%;
	}

	@media (max-width: 550px) {
		max-width: 40%;
	}
`

export const Name = styled.span`
	color: #383D40;
	font-size: 24px;
	font-weight: 500;
`

export const Horizontal = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;

	@media (max-width: 950px) {
		margin-top: 50px;
	}
`

export const ButtonsContainer = styled.div`
  display: flex;
	align-items: center;
	justify-content: space-between;
  padding: 20px 0 10px;
`

export const AddedText = styled.p`
  font-weight: bold;
  color: gold;
  font-size: 1.35em;
`

export const Price = styled.span`
	color: #383D40;
	font-size: 2.25em;
	font-weight: bold;
	justify-content: flex-start;
`

export const Button = styled.button`
	align-self: flex-end;
	width: ${props => props.qnt == 0 && '100%'};
  padding: 10px 42px;
  font-weight: bold;
	color: #fff;
	border-radius: 6px;
	font-size: 18px;
	background: ${props => props.bg || 'transparent'};
	cursor: pointer;
`

export const SecondaryButton = styled(Button)`
  width: 100%;
  color: rgba(4, 102, 185, 0.7);
  font-weight: bold;
  font-size: 1.25em;
	margin: 24px 0 16px;
`

export const ButtonCart = styled.button`
	width: 18px;
	height: 18px;
	font-weight: 500;
	font-size: 18px;
	color: #fff;
	background: #0466B9;
	display: flex;
	border-radius: 360px;
	align-content: center;
	justify-content: center;
	padding-bottom: 5px;
`

export const Right = styled.div`
	margin-left: auto;
	display: flex;
	align-items: center;
`

export const SpanQnt = styled.span`
	margin: 0px 10px 0px 10px;
	color: #383D40;
	padding: 2px 5px 0px 5px;
	border: 1px solid rgba(0,0,0,0.2);
	border-radius: 6px;
`

