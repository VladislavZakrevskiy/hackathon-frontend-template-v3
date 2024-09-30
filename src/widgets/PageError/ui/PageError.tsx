import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SPageError } from "./PageError.style";

interface Props {}

export const PageError: FC<Props> = () => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<SPageError>
			{t("Произошла непредвиденная ошибка")}
			<button onClick={reloadPage}>{t("Обновить страницу")}</button>
		</SPageError>
	);
};
