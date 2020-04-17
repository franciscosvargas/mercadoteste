import styled from 'styled-components';

export const Container = styled.div`
	height: 100% !important;
	width: 100%;
`;

export const Content = styled.div`
	height: calc(100% - 221px) !important;
	width: calc(100%-250px);
	display: flex;
	justify-content: space-around;
	padding: 50px 125px 0px 125px;
	flex-wrap: wrap;

	@media (max-width: 950px) {
		padding: 20px 50px 20px 50px;
	}

	@media (max-width: 350px) {
		padding: 20px 30px 20px 30px;
	}
`;

export const Box = styled.div`
	width: 40%;
	height: 70%;
	padding: 30px;
	background: #fff;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 6px;
	display: flex;
	
`

export const Image = styled.img`
	max-width: 90%;
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
`

export const Price = styled.span`
	color: #383D40;
	font-size: 30px;
	font-weight: 500;
	justify-content: flex-start
`

export const Button = styled.button`
	width: 100%;
	height: 52px;
	color: #fff;
	border-radius: 6px;
	font-size: 18px;
	background: ${props => props.bg};
	margin-top: 20px;
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

