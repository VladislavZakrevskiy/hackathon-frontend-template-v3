import { UserRoles } from "../consts/UserRoles";

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRoles[];
}

export interface UserSchema {
	authData?: User;

	_inited: boolean;
}
