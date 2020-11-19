import styled from 'styled-components';
import InputMask from "react-input-mask";

export const Container = styled(InputMask)`
	padding: 16px 13px 5px 13px;
	color: rgba(48, 50, 51, 0.8);
	font-size: 18px;
	border: 1px solid #77797B;
	border-radius: 6px;


	::placeholder {
		color: rgba(48, 50, 51, 0.5)
	}
`;



