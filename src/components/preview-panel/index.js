import styled from "styled-components";

const StyledDiv = styled.div`
	top: 0;
	left: calc(100% + 16px);
	width: 450px;
	border: 1px solid #ddd;
	border-radius: 0px;
`;

/**
 * WordPress dependencies
 */
const { BlockPreview } = wp.blockEditor;

function PreviewPanel({ item }) {
	return (
		<StyledDiv className="block-editor-inserter__preview-container">
			<div className="block-editor-inserter__preview c9-modal-preview">
				<div className="block-editor-inserter__preview-content">
					<BlockPreview
						__experimentalPadding={0}
						viewportWidth={1440}
						blocks={item}
					/>
				</div>
			</div>
		</StyledDiv>
	);
}

export default PreviewPanel;
