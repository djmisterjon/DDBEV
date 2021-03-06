import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import Activity_DataTree from './ActivityBarLeft/Activity_DataTree';
import { Store_LeftPan } from '../stores/Store_LeftPan';

function getContent(id) {
	return (<Activity_DataTree />);
}

/** content inside left pane */
const LeftPane = () => {
	const selectedID = Store_LeftPan.selectedID;
	return <div>{selectedID(selectedID)}<div />;
};

export default view(LeftPane);
