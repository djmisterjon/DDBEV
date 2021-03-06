import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}

	return <div className='warning'>Attention !</div>;
}

/** content inside left pane */
const LeftPane = () => {
	const [_state, _setState] = useState('value'); // react hook states
	const lstore = store({ _state: 30 }); // store states local

	return (
		<>
			<Activity_DataTree />
		</>
	);
};

export default view(LeftPane);
