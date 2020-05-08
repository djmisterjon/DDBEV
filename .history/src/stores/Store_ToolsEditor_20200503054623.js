import { store } from '@risingstack/react-easy-state';

/** Store des tools */
export const Store_ToolsEditor = store({
	/** le tools selectionner */
	selected: '',
	tools: [{ id: 'SelectRec' }, { id: 'drawRec' }, { id: 'duplicator' }],
});
