import { DefaultTheme } from "styled-components";

export type ScrollSchema = Record<string, number>;

export interface UISchema {
	scroll: ScrollSchema;
	themeStyles: DefaultTheme;
}
