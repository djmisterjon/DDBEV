import React from 'react';
import { store } from '@risingstack/react-easy-state';
import {
	FormOutlined,
	DeleteOutlined,
	CopyOutlined,
	DragOutlined,
} from '@ant-design/icons';
/** Store des tools */
export const Store_ToolsEditor = store({
	/** le tools selectionner */
	selected: '',
	data: {
		actions: [
			{ id: 'selectRec', icon: <DragOutlined /> },
			{ id: 'drawRec', icon: <FormOutlined /> },
			{ id: 'duplicator', icon: <CopyOutlined /> },
			{ id: 'delete', icon: <DeleteOutlined /> },
		],
		modes: [
			{ id: 'preventCollision', icon: <DragOutlined /> },
			{ id: 'compactType', icon: <FormOutlined /> },
			{ id: 'zenMode', icon: <CopyOutlined /> },
		],
	},
});
