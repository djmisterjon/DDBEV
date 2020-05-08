import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Switch, Modal, Button, InputNumber } from 'antd';
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
import './Activity_DataTree.css';
import { Store_treeSheets } from '../../stores/Store_TreeData';

const treeData_old = [
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
/**TODO: MODULE */
export const TreeTool = ({ _toolY, _nodeHover }) => {
	const [_modalVisible, _set__modalVisible] = useState(false);
	/** ajoute un dossier */
	const onClick_folder = (e) => {
		_set__modalVisible(true);
	};
	return (
		<>
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

			<Modal
				title={<p>Create DataSheet</p>}
				visible={_modalVisible}
				footer={[
					<Button key='back'>cancel</Button>,
					<Button key='submit' type='primary'>
						create
					</Button>,
				]}
			>
				<p>
					DataSheet it a SUPER Class thats manage sub index sheets collections
				</p>
				<InputNumber size='small' min={1} max={1000} defaultValue={3} />
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};
const Activity_DataTree = () => {
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

	const treeData = Store_treeSheets.getTreeAntdFormat();

	return (
		<div>
			<TreeTool _toolY={_toolY} _nodeHover={_nodeHover}></TreeTool>
			<Tree
				className={'TreeDataBase'}
				showLine={true}
				showIcon={true}
				defaultExpandedKeys={['0']}
				treeData={treeData}
				onSelect={onSelect}
				onMouseEnter={onMouseEnter}
			/>
		</div>
	);
};

export default view(Activity_DataTree);
