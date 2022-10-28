import { Store } from 'pullstate';

import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants';

import { getProperty } from '../auth';
import { getNamedType } from 'graphql';

interface IUserStore {
	isAuthenticated: boolean;
	id?: string;
	name?: string;
	email?: string;
	refresh_token?: string;
	expires_in?: number;
};

export const UserStore = new Store<IUserStore>({
	isAuthenticated: getProperty(AUTH_TOKEN) ? true : false,
	refresh_token: getProperty(REFRESH_TOKEN),
});