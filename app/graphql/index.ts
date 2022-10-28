import { AUTH_TOKEN } from '../constants';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { setContext } from '@apollo/client/link/context';

// Set `RestLink` with your endpoint
const restLink = new RestLink({ 
	uri: "https://dkgicggupnrxldwvkeft.supabase.co/",
	customFetch: fetch,
	headers: {
		"Content-Type": "application/json",
		"apikey": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg`
	},
});

/** Authentication middleware */
const authMiddleware = setContext((_, { headers }) => {
	// Get the authentication token, if exists
	const token = localStorage.getItem(AUTH_TOKEN);
	// append headers to context, passed to RESTLink
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : null,
		}
	};
});

// Setup your client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink
});