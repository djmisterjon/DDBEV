import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';
import { Store_LeftPan } from '../stores/Store_LeftPan';

function getContent(props) {
	switch (key) {
		case 'projetTree':
			return <Activity_DataTree />;
			break;

		default:
			return <Activity_DataTree />;
			break;
	}
}

/** content inside left pane */
const LeftPane = () => {
	const selectedID = Store_LeftPan.selectedID;
	return <>{getContent(selectedID)}</>;
};

export default view(LeftPane);
