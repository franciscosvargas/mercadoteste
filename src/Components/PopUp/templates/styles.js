import styled from 'styled-components';

export const Container = styled.div`
	padding: 30px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	font-size: 28px;
	color: #0466B9;
	max-height: 80%;
	max-width: 90% !important;


	@media (max-width: 660px) {
		font-size: 22px;
		padding: 20px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export const Button = styled.div`
	background: #0466B9;
	padding: 11px 20px 11px 20px;
	color: #fff;
	font-size: 18px;
	font-weight: 400 !important;
	border-radius: 6px;
	margin-top: 41px;
`

export const ButtonClose = styled.img`
	width: 18px;
	height: 18px;
	align-self: flex-end;
	cursor: pointer;
`

export const Title = styled.span`
	font-weight: 700;
	font-size: 18px;
	color: #303233;
	align-self: start;
`

export const Error = styled.span`
	font-weight: 300;
	color: #F63E3E;
	font-sizE: 18px;
	margin-top: 10px;
`

export const Input = styled.input`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;
	margin-top: 20px;

	::placeholder {
		color: rgba(48, 50, 51, 0.5);
	}
`

export const InputSpan = styled.span`
	color: #0466B9;
	font-size: 18px;
	margin-top: 15px;
	margin-bottom: 5px;
`

export const TextButton = styled.span`
	font-size: 14px;
	color: #0466B9;
	margin-top: 12px;
	margin-bottom: 10px;
	align-self: start;
	cursor: pointer;

`

export const FormButton = styled.button`
	height: 52px !important;
	padding: 15px;
	width: 100%;
	border-radius: 6px;
	background: ${props => props.bg};
	color: #fff;
	font-size: 18px;
	font-weight: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	font-weight: 300px !important;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}
`
