import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, checked } = attributes;
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onCheckboxChange = (newCheckboxValue) => {
		setAttributes({ checked: newCheckboxValue });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Color Settings")} icon="admin-appearance">
					<TextControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						help="a pointless input"
					></TextControl>
					<ToggleControl
						label="toggle something"
						checked={checked}
						onChange={onCheckboxChange}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__("Your Text", "gutenburg-text-block")}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
