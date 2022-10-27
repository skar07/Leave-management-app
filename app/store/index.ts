import { Store } from 'pullstate';

import { AUTH_TOKEN, AUTH_NAME } from '../constants';

import { getProperty } from '../auth';
import { getNamedType } from 'graphql';

interface IUserStore {
	isAuthenticated: boolean;
	id?: string;
	name?: string;
	email?: string;
};

export const UserStore = new Store<IUserStore>({
	isAuthenticated: getProperty(AUTH_TOKEN) ? true : false,
	name: getProperty(AUTH_NAME),
});