import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 130%;
	height: 100%;
	display: flex;
	flex-direction: row;
	position: fixed !important;
	background: rgba(0,0,0,0.7);
	overflow: hidden;
  z-index: 5;
`
export const Menu = styled.div`
  position: relative;
	width: 30vw;
	background: #fff;
	display: flex;
  flex-direction: column;
  font-size: 28px;
  padding: 24px;
  border-radius: 0 8px 8px 0;
	
	@media (max-width: 700px) {
		width: 35%;
	}

	@media (max-width: 550px) {
		width: 45%;
	}

	@media (max-width: 450px) {
		width: calc(80% - 30%);
	}

	@media (max-width: 350px) {
		width: calc(100% - 35%);
	}
`;

export const MenuItems = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 48px;
`

export const Icon = styled.img`
	width: 20px;
	height: 20px;
  align-self: flex-end;
`

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const Title = styled.span`
	color: #303233;
	font-weight: 700;
	font-size: 32px;
	margin-top: 40px;	
`

export const ItemDivider = styled.hr`
  background-color: gainsboro;
  height: 1px;
  width: 100%;
  margin: 36px 0;
`

export const List = styled.div`
	display: flex:
	flex-direction: column;
	height: calc(60%-110px) !important;
	overflow:auto; 

	::-webkit-scrollbar {
		width: 3px;
		background-color: rgba(0,0,0,0.1);
	} 

	::-webkit-scrollbar-thumb {
		background-color: #0466B9;
	}
`

export const Category = styled(Link)`
	color: #383D40;
	font-size: 20px;
  display: flex;
  
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const Whatsapp = styled(Link)`
	color: #0466B9;
	font-size: 18px;
  margin-left: 10px;
	display: flex;
`

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10px;
`

