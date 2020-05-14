import React, { useState, Component } from 'react';
import { Box } from '@material-ui/core';
import { view, store } from '@risingstack/react-easy-state';
import GridLayout from 'react-grid-layout';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import PageTopTool from './ContentPage/PageTopTool';
import { Store_DataBaseStorage } from '../stores/Store_DataPage';
import Layout from './ContentPage/Layout';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.

/** Componment descriptions */
const ContentPage = () => {
	const [_zoom, _set_zoom] = useState(1); // react hook states
	const [_spaceBar, _set_spaceBar] = useState(false); // react hook states
	const [_mousePosXY, _set__mousePosXY] = useState({
		x: 0,
		y: 0,
		tX: 0,
		tY: 0,
	}); // react hook states
	// /**@param {WheelEvent} e */
	// function onScroll(e) {
	// 	if (_spaceBar) {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		const scaleIn = e.deltaY < 0;
	// 		if (scaleIn) {
	// 			_set_zoom(Math.min(_zoom + 0.1, 1));
	// 		} else {
	// 			_set_zoom(Math.max(_zoom - 0.1, 0.5));
	// 		}
	// 	}
	// }
	// //TODO: BUG: ont recharge tous la page quand on press, donc enrigistrer les layouts avant
	function onKeyDown(e) {
		//32:spaceBar
		if (e.keyCode === 32) {
			_set_spaceBar(true);
		}
	}
	function onKeyUp(e) {
		_set_spaceBar(false);
	}
	// /**@param {MouseEvent} e */
	// function onMouseDown(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	_set__mousePosXY({ ..._mousePosXY, x: e.screenX, y: e.screenY });
	// }
	// function onMouseMove(e) {
	// 	_set_spaceBar(false);
	// }
	/** On donne la key index de la page pour retrouver les data layouts */
	// const root = Store_DataBaseStorage.root();
	return (
		<TransformWrapper
			options={{
				disabled: !_spaceBar,
				limitToBounds: false,
				minScale: 0.02,
				maxScale: 1.5,
			}}
		>
			<TransformComponent>
				<div
					// onMouseDown={_spaceBar ? (e) => onMouseDown(e) : void 0}
					// onMouseMove={_spaceBar ? (e) => onMouseMove(e) : void 0}
					// onWheel={(e) => onScroll(e)}
					onKeyDown={(e) => onKeyDown(e)}
					onKeyUp={(e) => onKeyUp(e)}
					className={'ContentPage'}
					tabIndex={0}
					style={{
						transform: `scale3d(${_zoom}, ${_zoom}, ${_zoom}) translate3d(${0}px, ${0}px, ${0}px)`,
					}}
				>
					content
					{/* {root.map((dataLayout) => (
						<Layout
							key={String(Math.random())}
							id={dataLayout.key}
							transformScale={_zoom}
						/>
					))} */}
				</div>
			</TransformComponent>
		</TransformWrapper>
	);
};
export default view(ContentPage);

// function ContentPage_old() {
// 	const [hoveredDrag, set_hoveredDrag] = useState(''); // Si over avec un drag elements, visual!
// 	const [draggableEl, set_draggableEl] = useState(null); // react hook states
// 	const [styleOnDrag, set_styleOnDrag] = useState('none'); // react hook states
// 	const [useCSSTransforms, set_useCSSTransforms] = useState(true); // react hook states

// 	/** modele dataGlobal par pages pour les databse seulement */
// 	//page id Charactere: {
// 	// const [Data, set_Data] = useState({
// 	// 	/** key name: sois de la page ou sous layout */
// 	// 	key: 'Charactere',
// 	// 	/** tous les setting du layout: permet aussi de redefenir datagrid apres muounting  */
// 	// 	setting: {},
// 	// 	/** la position datagrid: si null, na pas de parent grid donc position neutre */
// 	// 	datagrid: null,
// 	// 	/** Id relatif au dataContent inclu dans ce layer ou grid */
// 	// 	DataContentTypeId: null,
// 	// 	/** tout les grid enfant: pour chaque childrent creer un layout nested */
// 	// 	childrens: {
// 	// 		Information: {
// 	// 			key: 'Information',
// 	// 			setting: {},
// 	// 			datagrid: { x: 0, y: 0, w: 2, h: 2 },
// 	// 			DataContentTypeId: null,
// 	// 			childrens: {
// 	// 				name: {
// 	// 					key: 'name',
// 	// 					setting: {},
// 	// 					datagrid: { x: 0, y: 0, w: 1, h: 2 },
// 	// 					DataContentTypeId: 'Charactere_general_name',
// 	// 					childrens: null,
// 	// 				},
// 	// 				gameId: {
// 	// 					key: 'gameId',
// 	// 					setting: {},
// 	// 					datagrid: { x: 0, y: 2, w: 1, h: 2 },
// 	// 					DataContentTypeId: 'Charactere_general_name',
// 	// 					childrens: null,
// 	// 				},
// 	// 			},
// 	// 		},
// 	// 		CombatActions: {
// 	// 			key: 'CombatActions',
// 	// 			setting: {},
// 	// 			datagrid: { x: 0, y: 4, w: 1, h: 2 },
// 	// 			DataContentTypeId: null,
// 	// 			childrens: {
// 	// 				baseActions: {
// 	// 					key: 'baseActions',
// 	// 					setting: {},
// 	// 					datagrid: { x: 0, y: 0, w: 1, h: 2 },
// 	// 					DataContentTypeId: 'Charactere_general_name',
// 	// 					childrens: null,
// 	// 				},
// 	// 				maxActions: {
// 	// 					key: 'maxActions',
// 	// 					setting: {},
// 	// 					datagrid: { x: 4, y: 0, w: 1, h: 2 },
// 	// 					DataContentTypeId: 'Charactere_general_name',
// 	// 					childrens: null,
// 	// 				},
// 	// 			},
// 	// 		},
// 	// 	},
// 	// });
// 	// const [DataContentType, set_DataContentType] = useState({
// 	// 	/**page characte */
// 	// 	Charactere_general_name: {
// 	// 		/** key unite du projet */
// 	// 		key: 'Charactere_general_name',
// 	// 		/** type input modele */
// 	// 		type: 'InputString',
// 	// 		/** les setting relier a cette input */
// 	// 		setting: {},
// 	// 	},
// 	// });

// 	function getMaxWidth(datagrid) {
// 		if (datagrid) {
// 			return (1200 / 12) * datagrid.w;
// 		}
// 		return 1200;
// 	}
// 	/** @param {Data} data  todo: module custom*/
// 	function Layout(data, nestLevel) {
// 		/** @param {Data} data  todo: module custom*/
// 		function getNestedLayout(data, nestLevel) {
// 			//TODO: DEEP DROP AVEC     pointer-events: none;
// 			return (
// 				<GridLayout
// 					className={`ReactGridLayout ${
// 						nestLevel === radioLayers ? 'EditLevel' : 'DisableLevel'
// 					}`}
// 					style={{ width: getMaxWidth(data.datagrid) }}
// 					width={1200}
// 					cols={12}
// 					rowHeight={50}
// 					margin={[0, 0]}
// 					compactType={null}
// 					preventCollision={true}
// 					isDraggable={nestLevel === radioLayers}
// 					isResizable={nestLevel === radioLayers}
// 					useCSSTransforms={useCSSTransforms}
// 					isDroppable={nestLevel === radioLayers}
// 					onDragStart={(layout, oldDragItem, l, placeholder, e, node) => {
// 						if (l && nestLevel === radioLayers) {
// 							set_useCSSTransforms(false);
// 						}
// 					}}
// 					onDrag={(layout, oldDragItem, l, placeholder, e, node) => {
// 						if (oldDragItem.i === '__dropping-elem__') {
// 							console.log('node: ', node);
// 							console.log('placeholder: ', placeholder);
// 							console.log('node: ', node);
// 							console.log('placeholder: ', placeholder);
// 							setTimeout(() => {
// 								console.log('placeholder: ', placeholder);
// 								console.log('node: ', node);
// 							}, 2000);
// 						}
// 					}}
// 					onDrop={(data) => {
// 						const newobj = { ...Data };
// 						const id = Math.random();
// 						//todo:store
// 						newobj.childrens[id] = {
// 							key: id,
// 							setting: {},
// 							datagrid: { x: data.x, y: data.y, w: 1, h: 1 },
// 							DataContentTypeId: 'cg3fa_input',
// 							childrens: null,
// 						};
// 						set_Data(newobj);
// 					}}
// 				>
// 					{Object.values(data.childrens).map((childData) =>
// 						Layout(childData, nestLevel)
// 					)}
// 				</GridLayout>
// 			);
// 		}
// 		function getContent(data) {
// 			return (
// 				<div key={data.key} data-grid={data.datagrid}>
// 					input {data.key}
// 				</div>
// 			);
// 		}
// 		return (
// 			// todo: creer module div grid
// 			<div key={data.key} data-grid={data.datagrid}>
// 				<div className={'FloatingLabel'}>Label:{data.key}</div>
// 				<div className={data.datagrid && 'ContentLayout'}>
// 					{data.childrens
// 						? getNestedLayout(data, ++nestLevel)
// 						: getContent(data)}
// 				</div>
// 			</div>
// 		);
// 	}
// 	/** On donne la key index de la page pour retrouver les data layouts */
// 	Store_DataPage.currentPageKey = '__pg_181wfef54';
// 	const data = Store_DataPage.pageData;
// 	const content = Layout(data, -1);

// 	return (
// 		<div className={'ContentPage'}>
// 			<PageTopTool />

// 			{content}
// 		</div>
// 	);
// }