import { FC } from "react";
import { SLoader } from "./Loader.style";

interface Props {}

// Loader чисто для шаблона - надо менять под дизайн
export const Loader: FC<Props> = () => {
	return (
		<SLoader>
			<div className="lds-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</SLoader>
	);
};
