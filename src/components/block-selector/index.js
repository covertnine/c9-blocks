/**
 * Styles
 */
import styled from "styled-components";

const StyledSelector = styled.div`
	visibility: hidden;
	border: 2px dashed #aaa;
	font-size: 12px;
	text-align: center;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: bold;
	color: #999;
	opacity: 0;
	transition: opacity 1s;
`;

const BlockSelector = ({ text }) => (
	<StyledSelector className="block-selector">{text}</StyledSelector>
);

export default BlockSelector;
