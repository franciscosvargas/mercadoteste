import styled from 'styled-components';
import InputMask from "react-input-mask";

export const Container = styled.div`
	flex-direction: column;
	display: flex;
	flex-grow: 1;
`;


export const Input = styled(InputMask)`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;
	flex-grow: 1;


	::placeholder {
		color: rgba(48, 50, 51, 0.5)
	}
`;



export const InputSpan = styled.span`
	color: #0466B9;
	font-size: 18px;
	margin-top: 15px;
	margin-bottom: 5px;
`


