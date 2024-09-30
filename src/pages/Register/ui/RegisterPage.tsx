import { SignInDto, useRegisterMutation, useUserActions } from "@/entities/User";
import { USER_ACCESS_TOKEN } from "@/shared/consts/localStorage";
import { getRouteMain } from "@/shared/consts/router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [authData, setAuthData] = useState<SignInDto>({
		email: "",
		password: "",
	});
	const [signIn] = useRegisterMutation();
	const nav = useNavigate();
	const { setAuthData: setAuthDataRedux } = useUserActions();

	const onSubmit = async () => {
		const user = await signIn(authData).unwrap();
		if (user) {
			localStorage.setItem(USER_ACCESS_TOKEN, user.accessToken);
			nav(getRouteMain());
			setAuthDataRedux(user);
		}
	};

	return (
		<div>
			<form>
				<input value={authData.email} onChange={(e) => setAuthData((prev) => ({ ...prev, email: e.target.value }))} />
				<input
					value={authData.password}
					onChange={(e) => setAuthData((prev) => ({ ...prev, password: e.target.value }))}
				/>
				<button type="submit" onClick={onSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
