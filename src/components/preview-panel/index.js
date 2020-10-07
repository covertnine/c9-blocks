import styled from "styled-components";

const StyledDiv = styled.div`
	top: 0;
	left: calc(100% + 16px);
`;

/**
 * WordPress dependencies
 */
const { BlockPreview } = wp.blockEditor;

function InserterPreviewPanel({ item }) {
	return (
		<StyledDiv className="block-editor-inserter__preview-container">
			<div className="block-editor-inserter__preview">
				<div className="block-editor-inserter__preview-content">
					<BlockPreview
						__experimentalPadding={16}
						viewportWidth={500}
						blocks={item}
					/>
				</div>
			</div>
		</StyledDiv>
	);
}

export default InserterPreviewPanel;
