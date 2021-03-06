import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import * as actions from '../../store/actions/popup';

import {
  Container,
  Menu,
  MenuItems,
  CloseIcon,
  Icon,
  Title,
  ItemDivider,
  List,
  Category,
  Footer,
  Whatsapp
} from './styles';

import icClose from '../../assets/ic_close.svg'
import icWhats from '../../assets/ic_whats_blue.svg'


function SideMenu({categories, open, menuStatus, history, logout }) {
  

	const redirect = async (category, index) => {

		menuStatus()

		if(index === 0) {
			return history.push('/')
		}

		history.push(`/category/${category}`)
	}

	const redirectAbout = async () => {

		menuStatus()

		history.push(`/about`)
	}

	
	return (
		<SwitchTransition>
			<CSSTransition key={open ? "Goodbye, world!" : "Hello, world!"} in={open} timeout={300} classNames="my-node" >
				{open ? (
					<Container>
						<Menu>
              <MenuItems>
                <CloseIcon onClick={menuStatus} src={icClose}/>
                <Title>Categorias</Title>

                <ItemDivider />

                <List>
                  {categories.map((category, index) => 
                    <Category key={index} onClick={() => redirect(category, index)}>{category}</Category>
                  )}
                </List>

                <ItemDivider />
                
                <Footer>
                  <Category onClick={redirectAbout}>Sobre a empresa</Category>
                  <div style={{ display: 'flex' }}>
                    <Icon src={icWhats}/>
                    <Whatsapp href="https://api.whatsapp.com/send?phone=5563991047876">Atendimento via WhatsApp</Whatsapp>
                  </div>
                  {/* <Category onClick={signOut}>Sair da Conta</Category> */}
                </Footer>
              </MenuItems>
						</Menu>
					</Container>
				) : <div></div>}
			</CSSTransition>
		</SwitchTransition>
	);
}

const mapStateToProps = state => ({
	categories: state.products.categories,
	open: state.popup.menu
});

const mapDispatchToProps = dispatch =>
bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
