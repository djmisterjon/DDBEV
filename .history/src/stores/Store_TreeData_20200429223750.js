/**
 * @typedef {Object} DataSheet - Liste des dataSheet
 * @property {boolean} dataSheet.isRoot - Largeur maximal du layou
 * @property {string} dataSheet.id - Largeur maximal du layou
 * @property {string} dataSheet.key - Largeur maximal du layou
 * @property {string} dataSheet.contentId - Largeur maximal du layou
 * @property {array} dataSheet.children - Largeur maximal du layou
 */

import { FolderFilled, DropboxOutlined } from '@ant-design/icons';
import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Stock tous les data de page */
export const Store_treeSheets = store({
	ICON: { FOLDER: <FolderFilled />, DATASHEET: <DropboxOutlined /> },
	/** @static - type de datatree */
	TYPE: {
		FOLDER: 'FOLDER',
		ROOT: 'ROOT',
		DATASHEET: 'DATASHEET',
		SHEET: 'SHEET',
	},
	/** survol dun node id */
	hoverID: '',
	/**@type {DataSheet} - Default template for Sheets trees */
	default: {
		/** Indicateur de root, HautNiveau du tree */
		isRoot: true,
		id: '',
		/** key unique indexation pour le tree */
		key: '0-0-0',
		/** ID du content du sheets */
		contentId: '',
		/** Childrens du tree */
		children: [],
	},

	data: {
		/**@static Les root qui permete de construire les category tree */
		DATABASES: {
			isRoot: true,
			id: 'DATABASES',
			type: 'FOLDER',
			key: 'aaaaa',
			/** ID du content du sheets */
			contentId: '',
			/** les ids de la structures de DATABASE*/
			children: ['Players', 'Monsters', 'Items'],
		},
		/**@static Les root qui permete de construire les category tree */
		CLASSES: {
			isRoot: true,
			id: 'CLASSES',
			type: 'FOLDER',
			key: '0',
			/** ID du content du sheets */
			contentId: '',
			/** les ids de la structures de DATABASE*/
			children: [],
		},
		/**@static Les root qui permete de construire les category tree */
		VALIDATORS: {
			isRoot: true,
			id: 'VALIDATORS',
			type: 'FOLDER',
			key: '0',
			/** ID du content du sheets */
			contentId: '',
			/** les ids de la structures de DATABASE*/
			children: [],
		},
		Players: {
			isRoot: false,
			id: 'Players',
			type: 'DATASHEET',
			key: 'aaaaa-0',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: [],
		},
		Monsters: {
			isRoot: false,
			id: 'Monsters',
			type: 'DATASHEET',
			key: 'aaaaa-1',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: [],
		},
		Items: {
			isRoot: false,
			id: 'Items',
			type: 'DATASHEET',
			key: 'aaaaa-bb',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: ['aaaaa-bb-aa'],
		},
		Items2: {
			isRoot: false,
			id: 'Items2',
			type: 'DATASHEET',
			key: 'aaaaa-bb-aa',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: [],
		},
	},
	getData(id) {
		return Store_treeSheets.data[id];
	},
	getIcon(data) {
		const type = data.type;
		return this.ICON[type];
	},
	getSwitcherIcon(data) {
		return data.children.length ? '' : '-';
	},
	getRoots() {
		return Object.values(Store_treeSheets.data).filter((data) => data.isRoot);
	},
	/** return dataTree pour le format Antdesign */
	getTreeAntdFormat() {
		const roots = this.getRoots();
		function mapperToAntd(data) {
			return {
				title: data.id,
				key: data.key,
				icon: Store_treeSheets.getIcon(data), //todo: import
				// switcherIcon: Store_treeSheets.getSwitcherIcon(data), // todo: custom icons si sheet
				children: [
					...data.children.map((id) => mapperToAntd(Store_treeSheets.data[id])),
				],
			};
		}
		const Data = roots.map((dataRoot) => mapperToAntd(dataRoot));
		return Data;
	},

	addSheet(data) {
		const ranId = '_new' + Math.random();
		Store_treeSheets.data[ranId] = {
			isRoot: false,
			id: 'ranId',
			type: 'DATASHEET',
			key: '0-0',
			/** ID du content du sheets */
			contentId: '',
			/** Childrens du tree */
			children: [],
		};
		Store_treeSheets.data.DATABASES.children.push(ranId);
	},
});
