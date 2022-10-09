import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, checked, backgroundColor, textColor } = attributes;
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onCheckboxChange = (newCheckboxValue) => {
		setAttributes({ checked: newCheckboxValue });
	};
	const onBackgroundColorChange = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};
	const onTextColorChange = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Options")}>
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
				<PanelColorSettings
					title={__("Color Settings", "gutenburg-text-block")}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onBackgroundColorChange,
							label: __("Background Color", "gutenburg-text-block"),
						},
						{
							value: textColor,
							onChange: onTextColorChange,
							label: __("Text Color", "gutenburg-text-block"),
						},
					]}
				>
					<ContrastChecker
						textColor={textColor}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>
			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor,
						color: textColor,
					},
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
