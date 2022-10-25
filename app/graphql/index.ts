import { AUTH_TOKEN } from '../constants';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { setContext } from '@apollo/client/link/context';

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://dkgicggupnrxldwvkeft.supabase.co/" });

/** Authentication middleware */
const authMiddleware = setContext((_, { headers }) => {
	// Get the authentication token, if exists
	const token = localStorage.getItem(AUTH_TOKEN);
	// append headers to context, passed to RESTLink
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : null
		}
	};
});

// Setup your client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});