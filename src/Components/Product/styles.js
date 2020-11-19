import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  flex-grow: 1;
  background: #FFFFFF;
	box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;

export const CardContent = styled.div`
  padding: 20px;
`

export const Name = styled(Link)`
  display: block;
	color: #383D40;
	font-size: 18px;
	height: 44px;
  align-self: flex-start;
  margin-bottom: 24px;
`

export const Image = styled.img`
	margin-top: 18px;
  width: 100%;
  flex-grow: 1;
`

export const AddCartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

export const Button = styled.button`
	width: 100%;
	background: ${props => props.bg};
	height: 32px;
	color: #FFFFFF;
	font-size: 16px;
	font-weight: 300;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const AddedText = styled.p`
  font-weight: bold;
  color: gold;
  font-size: 1em;
  margin: 0 12px;
  transition: all 0.5s;
`
