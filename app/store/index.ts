import { Store } from 'pullstate';

import { AUTH_TOKEN, REFRESH_TOKEN } from '../constants';

import { getProperty } from '../auth';
import { getNamedType } from 'graphql';


export const UserStore = new Store<UserStore>({
	isAuthenticated: getProperty(AUTH_TOKEN) ? true : false,
	refresh_token: getProperty(REFRESH_TOKEN),
	choice: "currentMonth",
});



