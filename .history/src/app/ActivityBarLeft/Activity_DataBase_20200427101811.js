import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import { Tree, Switch } from 'antd';
import {
	CarryOutOutlined,
	FormOutlined,
	FolderOutlined,
	FolderViewOutlined,
	FilePdfOutlined,
	FileOutlined,
} from '@ant-design/icons';

const Activity_DataBase = () => {
	const [showLine, setShowLine] = useState(true);
	const [showIcon, setShowIcon] = useState(false);

	const onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	};

	return (
		<div>
			<Tree
				showLine={true}
				showIcon={true}
				defaultExpandedKeys={['0-0-0']}
				onSelect={onSelect}
				treeData={treeData}
			/>
		</div>
	);
};

export default view(Activity_DataBase);
