/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon:{
		src: (<svg viewBox="4 1.05 40 42.95" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.75 33H41V15.55q.85-.25 1.575-.675Q43.3 14.45 44 13.9V33q0 1.15-.925 2.075Q42.15 36 41 36H12l-8 8V7q0-1.15.9-2.075Q5.8 4 7 4h21.85q-.2.7-.3 1.475-.1.775-.05 1.525H7v29.75ZM12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h21.75q-1.05-.55-1.925-1.3t-1.575-1.7H12ZM7 7v26V7Zm31 5.05q-2.3 0-3.9-1.6t-1.6-3.9q0-2.3 1.6-3.9t3.9-1.6q2.3 0 3.9 1.6t1.6 3.9q0 2.3-1.6 3.9t-3.9 1.6Z"/>
	  </svg>),
		foreground: '#ffffff',
		background: '#141414'
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
