import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import { Tree, Select, Divider, Collapse } from 'antd';
import { Store_treeSheets } from '../../stores/Store_TreeData';
import { Store_layouts } from '../../stores/Store_DataPage';
import ModaleTools from './Activity_DataTree/ModaleTools';

/**TODO: MODULE */
const { Option } = Select;
const { Panel } = Collapse;

const Activity_DataTree = () => {
	/** le node au survole de la sourit */
	const [_nodeHover, _set_nodeHover] = useState({ node: null, offsetY: 0 });

	const onSelect = (selectedKeys, info) => {
		Store_treeSheets.node_selected = selectedKeys[0];
	};
	const onMouseEnter = (info) => {};
	const onMouseLeave = (info) => {};
	//TODO: FAIT LES STORE PAR PAGE, UN STORE DOI POUVOIR FONCTIONER SANS CREATIO NDE DB
	Store_layouts.MAKEDEMODEBUG(); //DELETEME: REMOVE ME DEBUG ONLY
	const treeRoot = Store_treeSheets.getTreeAntdFormat();
	return (
		<>
			<Divider orientation='left'></Divider>
			<Collapse bordered={false} defaultActiveKey={['1']}>
				<ModaleTools _nodeHover={_nodeHover}></ModaleTools>
				<Panel header='Data Tree' key='1'>
					<Tree
						className={'TreeDataBase'}
						showLine={true}
						showIcon={true}
						defaultExpandedKeys={['0']}
						treeData={treeRoot}
						onSelect={onSelect}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					/>
				</Panel>
			</Collapse>
			<Divider orientation='left'></Divider>
		</>
	);
};

export default view(Activity_DataTree);
