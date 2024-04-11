import styled from 'styled-components';

const StyledDiv = styled.div`
	top: 0;
	left: calc(100% + 16px);
	width: 450px;
	border: 1px solid #ddd;
	border-radius: 0px;
	position: absolute;
	padding: 0;
	background-color: #fff;
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
						viewportWidth={1200}
						maxHeight={4500}
						//minHeight={1200}
						additionalStyles={[
							{
								css: '.block-selector,.components-resizable-box__handle{visibility:hidden;}',
							},
						]}
						blocks={item}
					/>
				</div>
			</div>
		</StyledDiv>
	);
}

export default PreviewPanel;
