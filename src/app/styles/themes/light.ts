import { DefaultTheme } from "styled-components";
import { baseTheme } from "./baseTheme";
import { Themes } from "./types/Themes";

export const lightTheme: DefaultTheme = {
	...baseTheme,
	type: Themes.light,

	colors: {
		...baseTheme.colors,
		bg: "#E5E4E8",
		font: "#19191B",
	},
};
