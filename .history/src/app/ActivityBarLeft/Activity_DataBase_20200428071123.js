import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Switch, Modal } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderOutlined,
	FolderViewOutlined,
	FilePdfOutlined,
	FileOutlined,
	FolderFilled,
	LinkOutlined,
	SettingFilled,
	CodeFilled,
	FolderAddFilled,
	DropboxOutlined,
	FileAddFilled,
} from '@ant-design/icons';
import './Activity_DataBase.css';

const treeData = [
	{
		title: 'DATABASE',
		key: '0-0',
		icon: <FolderFilled />,
		// disabled: true,
		// icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				icon: <FolderFilled />,
				children: [
					{
						title: <div>leaf</div>,
						key: '0-0-0-0',
						icon: <CarryOutOutlined />,
						switcherIcon: <FormOutlined />,
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
						icon: <CarryOutOutlined />,
						switcherIcon: <FormOutlined />,
					},
				],
			},
		],
	},
];

export const TreeTool = ({ _toolY, _nodeHover }) => {
	/** ajoute un dossier */
	const onClick_folder = (e) => {
		console.log('_nodeHover: ', _nodeHover);
		_nodeHover;
	};
	return (
		<div
			className={'TopModuleHeader'}
			style={{
				top: `${_toolY}px`,
				position: 'relative',
				width: 'max-content',
				float: 'right',
			}}
		>
			<div className={'TopModuleR_tool'}>
				<FolderAddFilled onClick={onClick_folder} />
				<FileAddFilled />
				<DropboxOutlined />
				<SettingFilled />
			</div>
		</div>
	);
};
const Activity_DataBase = () => {
	const [_toolY, _set_toolY] = useState(0);
	/** le node au survole de la sourit */
	const [_nodeHover, _set_nodeHover] = useState(0);

	const onSelect = (selectedKeys, info) => {
		_set_toolY(info.nativeEvent.target.offsetTop);
	};
	const onMouseEnter = (info) => {
		const id = info.node.pos;
		_set_toolY(info.event.target.offsetTop);
		_set_nodeHover(id);
	};

	return (
		<div>
			<TreeTool _toolY={_toolY} _nodeHover={_nodeHover}></TreeTool>
			<Tree
				className={'TreeDataBase'}
				showLine={true}
				showIcon={true}
				defaultExpandedKeys={['0-0-0']}
				treeData={treeData}
				onSelect={onSelect}
				onMouseEnter={onMouseEnter}
			/>
			<Modal
				title='Basic Modal'
				visible={true}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</div>
	);
};

export default view(Activity_DataBase);
