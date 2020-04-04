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

export const Title = styled.span`
	font-weight: 700;
	font-size: 18px;
	color: #303233;
	align-self: start;
`

export const Input = styled.input`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;
	margin-top: 20px;
	

	::placeholder {
		rgba(48, 50, 51, 0.5)
	}
`

export const TextButton = styled.span`
	font-size: 14px;
	color: #0466B9;
	margin-top: 12px;
	margin-bottom: 10px;
	align-self: start;

`

export const FormButton = styled.button`
	height: 52px;
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
`
