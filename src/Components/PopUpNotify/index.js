import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container, Content, Button, ButtonClose } from './styles';

import * as actions from '../../store/actions/popup';

import icClose from '../../assets/ic_cancel.svg';

const PopUpNotify = ({popupOpen, popupStatus}) => (

	<div>
		{popupOpen ? (
			<Container>
				<Content>
					<ButtonClose onClick={popupStatus}src={icClose}/>
					<p>Novo sabor café torresmo seco</p>
					<Button>VER AGORA</Button>
				
				</Content>
			</Container>

		) : null }
	</div>
);

const mapStateToProps = state => ({
	popupOpen: state.popup.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PopUpNotify)
