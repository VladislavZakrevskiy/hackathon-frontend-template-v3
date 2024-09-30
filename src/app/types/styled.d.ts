import "styled-components";
import { ITheme } from "../styles/themes/types/ITheme";
import { Themes } from "../styles/themes/types/Themes";

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {
		type: Themes;
	}
}
