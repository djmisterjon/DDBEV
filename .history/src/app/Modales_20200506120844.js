import React, { useState } from 'react';
import { view, store } from '@risingstack/react-easy-state';
import { FolderAddFilled, FileAddFilled } from '@ant-design/icons';
import Modal from 'antd/lib/modal';
import { Button } from 'antd';
import ModaleContents from './Modales/ModaleContents';
import { Store_treeSheets } from '../stores/Store_TreeData';
import ModaleType_dataClass from './Modales/ModaleType_dataClass';

function ModaleProvider(type, _modalVisible) {
	// Store_treeSheets.node_selected
	return <ModaleType_dataClass />;
}
/** Store Componment */
export const Store_Modales = store({
	_visible: false,
	data: [],
});
/** tool qui apelle des modale */
const Modales = () => {
	const isVisible = Store_Modales._visible;

	return (
		<>
			<div className='ModaleTools'>
				<div className={'TopModuleR_tool'}>
					<FolderAddFilled onClick={onClick_addFolder} />|
					<FileAddFilled onClick={onClick_addData} />
				</div>
			</div>
			{_modalVisible && ModaleProvider()}
		</>
	);
};

export default view(Modales);