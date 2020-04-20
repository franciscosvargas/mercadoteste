import React from 'react';

import TopBar from './TopBar'
import SideMenu from './SideMenu'
import Popup from './PopUp'

const Components = ({history}) => (
	<div>
		<SideMenu history={history} />
		<Popup />
		<TopBar/>
		
	</div>
);

export default Components;
