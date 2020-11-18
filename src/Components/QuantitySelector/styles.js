import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Price = styled.span`
	font-weight: 700;
	font-size: 16px;
	color: #383D40;
  align-self: start;
  margin-right: auto;
`

export const ButtonCart = styled.button`
	width: 20px;
  height: 20px;
	font-weight: bold;
	font-size: 18px;
	color: #fff;
	background: #0466B9;
	display: flex;
	border-radius: 50%;
	align-content: center;
  justify-content: center;
  cursor: pointer;
`

export const SpanQnt = styled.span`
	margin: 0px 10px 0px 10px;
	color: #383D40;
	padding: 2px 5px 0px 5px;
	border: 1px solid rgba(0,0,0,0.2);
	border-radius: 6px;
`
