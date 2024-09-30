import { DefaultTheme } from "styled-components";
import { Themes } from "./types/Themes";
import { baseTheme } from "./baseTheme";

export const darkTheme: DefaultTheme = {
	...baseTheme,
	type: Themes.dark,

	colors: {
		...baseTheme.colors,
		bg: "#19191B",
		font: "#E5E4E8",
	},
};
