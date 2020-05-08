import React from 'react';
import { store } from '@risingstack/react-easy-state';
import {
	FormOutlined,
	DeleteOutlined,
	CopyOutlined,
	DragOutlined,
	ColumnWidthOutlined,
	PicRightOutlined,
	ZoomInOutlined,
	ZoomOutOutlined,
	FolderViewOutlined,
	CompressOutlined,
} from '@ant-design/icons';

/** switchi selon les modes, un seul mode a la foi */
export const Store_Tool_mode = store({
	groupType: 'radio',
	title: 'Mode:',
	data: { value: 'selectRec' },
	children: {
		selectRec: {
			id: 'selectRec',
			icon: <DragOutlined />,
			tooltip: 'Select,Drag elements based on layer selected',
		},
		drawRec: {
			id: 'drawRec',
			icon: <FormOutlined />,
			tooltip: 'Draw empty grid zone layer',
		},
		duplicator: {
			id: 'duplicator',
			icon: <CopyOutlined />,
			tooltip: 'Duplicate, clone a grid',
		},
		delete: {
			id: 'delete',
			icon: <DeleteOutlined />,
			tooltip: 'Delette a grid zone and childrens',
		},
	},
	getClass(id) {
		return this.isActive(id) && 'Active';
	},
	onClick(id) {
		this.data.value = id;
	},
	isActive(id) {
		return this.data.value === id;
	},
});
/** options activer pendant ledition */
export const Store_Tool_options = store({
	groupType: 'radio',
	title: 'Options:',
	data: { value: ['preventCollision'] },
	children: {
		preventCollision: {
			id: 'preventCollision',
			icon: <ColumnWidthOutlined />,
			tooltip: 'Prevent Collider between grids when drag',
		},
		compactType: {
			id: 'compactType',
			icon: <PicRightOutlined />,
			tooltip: 'Auto Compact grids space orientations',
		},
		renderMode: {
			id: 'renderMode',
			icon: <FolderViewOutlined />,
			tooltip: 'Data renderMode mode',
		},
	},
	getClass(id) {
		return this.isActive(id) && 'Active';
	},
	onClick(id) {
		const index = this.data.value.indexOf(id);
		if (index > -1) {
			this.data.value.splice(index, 1);
		} else {
			this.data.value.push(id);
		}
	},
	isActive(id) {
		return this.data.value.indexOf(id) > -1;
	},
});

/** Stock tous les info pour afficher le content dans la pane-left */
export const Store_Tool_Zoom = store({
	groupType: 'button',
	data: { value: 1, min: 0.4, max: 1.6 },
	children: {
		zoomIn: {
			id: 'zoomIn',
			icon: <ZoomInOutlined />,
			tooltip: 'ZoomIn',
			onClick() {
				const data = Store_Tool_Zoom.data;
				data.value = Math.min(data.max, data.value + 0.1);
			},
		},
		zoomOut: {
			id: 'zoomOut',
			icon: <ZoomOutOutlined />,
			tooltip: 'ZoomOut',
			onClick() {
				const data = Store_Tool_Zoom.data;
				data.value = Math.max(data.min, data.value - 0.1);
			},
		},
		fit: {
			id: 'fit',
			icon: <CompressOutlined />,
			tooltip: 'fit Screen',
			onClick() {
				Store_Tool_Zoom.data.value = 1;
			},
		},
	},
	getClass(id) {
		return 'Buttonzzzzzzzz';
	},
	onClick(id) {
		const data = this.data;
		if (id === 'zoomIn') {
			data.value = Math.min(data.max, data.value + 0.1);
		}
		if (id === 'zoomIn') {
			data.value = Math.min(data.max, data.value + 0.1);
		}
	},
	isActive(id) {
		return this.data.value.indexOf(id) > -1;
	},
});

/**
 * @typedef {Object} DataGroupTools - Desc
 * @property {string} DataGroupTools.id - Desc
 * @property {string} DataGroupTools.title - Desc
 * @property {string} DataGroupTools.type - radio,radioButton,switch,switchButton,button
 * @property {string|Array.<string>} [DataGroupTools.actived] - Desc
 * @property {Array.<DataTool>} DataGroupTools.children - Desc
 * @property {function} [isActive] - Desc
 * @property {function} [toggleActive] - Desc
 */
/**
 * @typedef {Object} DataTool - Desc
 * @property {string} DataTool.id - Desc
 * @property {JSX.Element} DataTool.icon - Desc
 * @property {string} DataTool.tooltip - Desc
 */

/** Store des tools */
export const Store_ToolsEditor = store({
	/** ce son la list des tools visible */
	data: [Store_Tool_mode, Store_Tool_options], //, Store_Tool_options, Store_Tool_Zoom
});
