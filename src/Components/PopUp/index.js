import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Container } from './styles';

import * as actions from '../../store/actions/popup';

import Templates from './templates'

const PopUpNotify = ({popup, popupStatus}) => {

	
	const PopUp = Templates(popup.popup.name)
	
	return (
		<div>
			{popup.popup.open ? (
				<Container>
					<PopUp info={popup.popup.info} close={popupStatus}/>
				</Container>
			) : null }
		</div>
	)
};

const mapStateToProps = state => ({
	popup: state.popup
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PopUpNotify)
