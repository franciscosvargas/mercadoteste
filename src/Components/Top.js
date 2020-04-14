import React from 'react';

import TopBar from './TopBar'
import SideMenu from './SideMenu'

const Components = ({history}) => (
	<div>
		<SideMenu history={history} />
		<TopBar/>
		
	</div>
);

export default Components;
