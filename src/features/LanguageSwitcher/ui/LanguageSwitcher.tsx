import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	short?: boolean;
}

export const LanguageSwitcher: FC<Props> = memo(({ short }) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<button onClick={toggle}>
			{/* <Button onClick={toggle}> */}
			{t(short ? "Короткий язык" : "Язык")}
			{/* </Button> */}
		</button>
	);
});
