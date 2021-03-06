import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** data folder de type Classes */
export const Store_Classes = store({
	/** icon representatif des */
	default: {
		id: '',
		minIndex: '',
		settingId: '',
		/** les classes modele utiliser */
		classesId: [],
		/** choix des icons custom */
		cunstomIconId: '',
	},
	data: [
		{
			id: '',
			type: '.CLASSES||.EXTENT',
			settingId: '',
			/** les classes modele utiliser */
			classesId: [],
			/** choix des icons custom */
			cunstomIconId: '',
		},
	],
	/** setting des dataClasses */
	setting: {},
});
