import { AUTH_TOKEN } from '../constants';

import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const authRestLink = new ApolloLink((operation, forward) => {
	//TODO: Fix type errors
	operation.setContext(({ headers }) => {
		const token = localStorage.getItem(AUTH_TOKEN);
		return {
			headers: {
				...headers,
				Accept: "application/json",
				Authorization: token ? `Bearer ${token}` : null,
			}
		};
	});

	return forward(operation).map(result => {
		const { restResponses } = operation.getContext();
		const authTokenResponse = restResponses.find(res => res.headers.has("Authorization"));
		if (authTokenResponse) {
			localStorage.setItem("token", authTokenResponse.headers.get("Authorization"));
		}
		return result;
	});
});

// Set `RestLink` with your endpoint
const restLink = new RestLink({
	uri: "https://dkgicggupnrxldwvkeft.supabase.co/",
	customFetch: fetch,
	headers: {
		"Content-Type": "application/json",
		"apikey": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg`
	},
});

// Setup your client
export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([authRestLink, restLink])
});

