import React from 'react';
import { store } from '@risingstack/react-easy-state';

/** Data for dataBase content
 */
export const Store_DataBase = store({
	default: {
		/** Indicateur de root, Layout de base */
		children: [],
	},
	data: [],
});
