import React from 'react';

import { Container, ButtonClose, Button } from './styles';

import icClose from '../../../assets/ic_cancel.svg';

const Login = ({info, close}) => (
	<Container>
		<ButtonClose onClick={close} src={icClose}/>
			<p>{info.text}</p>
		<Button>FAZER LOGIN</Button>
	</Container>
);

export default Login;