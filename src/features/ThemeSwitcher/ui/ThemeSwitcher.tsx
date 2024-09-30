import { memo, useCallback } from "react";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { useUIActions } from "@/features/UI";
import { useAppSelector } from "@/shared/lib/hooks";
import { Themes } from "@/app/styles";

export const ThemeSwitcher = memo(() => {
	const { toggleTheme } = useUIActions();
	const { type } = useAppSelector((state) => state.ui.themeStyles);

	const onToggle = useCallback(() => {
		toggleTheme();
	}, []);

	return (
		<button onClick={onToggle}>
			{/* <Button onClick={onToggle}> */}
			{type === Themes.dark ? <DarkIcon /> : <LightIcon />}
			{/* </Button> */}
		</button>
	);
});
