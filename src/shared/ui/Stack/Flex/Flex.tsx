import styled from "styled-components";

export type FlexJustify = "start" | "center" | "end" | "space-between" | "space-evenly" | "space-around";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "0" | "4" | "8" | "16" | "32";

interface FlexStylesProps {
	direction?: FlexDirection;
	alignItems?: FlexAlign;
	justifyContent?: FlexJustify;
	gap?: FlexGap;
	max?: boolean;
}

export const Flex = styled.div<FlexStylesProps>`
	display: flex;
	flex-direction: ${(props) => props.direction};
	align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
	gap: ${(props) => props.gap}px;
	width: ${(props) => (props.max ? "100%" : "auto")};
`;
