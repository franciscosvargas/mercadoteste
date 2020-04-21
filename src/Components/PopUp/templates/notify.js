import React from 'react';

import { Container, ButtonClose, Button } from './styles';

import icClose from '../../../assets/ic_cancel.svg';

const Notify = ({info, close}) => (
	<Container>
		<ButtonClose onClick={close} src={icClose}/>
			<p>{info}</p>
		<Button>VER AGORA</Button>
	</Container>
);

export default Notify;
