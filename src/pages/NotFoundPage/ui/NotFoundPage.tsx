import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

export const NotFoundPage = () => {
	const { t } = useTranslation();

	return <Page>{t("Страница не найдена")}</Page>;
};
