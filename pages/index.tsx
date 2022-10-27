import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { client } from '../app/graphql';

import { UserStore } from '../app/store';
import { AUTH_TOKEN } from '../app/constants';

export default function Login() {
	const router = useRouter()
	const { isAuthenticated } = UserStore.useState(s => s);

	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	/** On component (page) loaded */
	React.useEffect(() => {
		// Redirect the user to the dashboard
		// If they are authenticated automatically
		if (isAuthenticated)
			router.push('app/');
	});

	/** GraphQL Mutation for Login */
	const LOGIN_MUTATION = gql`
            mutation LoginMutation {
			login(
				input: $input
			) @rest(
				type: "AuthLogin",
				path: "/auth/login", 
				method: "POST"
			) {
				token
				user
			}
            }
	`;

	return (
		<section>
			<h1 className='text-6xl font-semibold text-center p-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text'>Leave Management App</h1>
			<div className='absolute right-1/3 xl:w-1/3 mt-10 h-fit w-fit px-28 py-12  border border-blue-300 shadow-lg shadow-blue-300 flex flex-col justify-items-center rounded-2xl space-y-8 text-center'>
				<h3 className='text-2xl font-semibold text-blue-600 text-center'>Sign up</h3>
				<input
					type='email'
					placeholder='Email address'
					className='py-3.5 px-3 mt-7 w-full text-left rounded-xl border border-blue-300 '
					required
					value={email}
					onChange={
						(e) => {
							setEmail(e.currentTarget.value)
						}
					}
				/>
				<input
					type='password'
					placeholder='Password'
					className='py-3.5 px-3 mt-7 w-full text-left rounded-xl border border-blue-300 '
					required
					value={password}
					onChange={
						(e) =>
							setPassword(e.currentTarget.value)
					}
				/>
				<button
					onClick={
						() => {
							client
								.mutate({
									mutation: LOGIN_MUTATION,
									variables: {
										input: {
											email,
											password
										}
									}
								})
								.then((response) => {
									const { login } = response?.data;

									const { token, user } = login;

									// If the authentication is successful
									if (token) {
										// Update user store to reflect the user's details
										UserStore.update(
											s => {
												s.isAuthenticated = true;
												s.name = user.name;
											}
										)
										// Save token to local storage
										localStorage.setItem(AUTH_TOKEN, token);
									}
									// TODO: handle errors
								});
						}
					}
					className='px-10 py-3.5 text-white font-semibold text-lg bg-blue-700 rounded-xl'
				>
					Sign up
				</button>
				<div className='flex justify-center text-gray-800 align-center'>
					<span className='border-t border-gray-800 w-1/3 mt-3.5' />
					<span className='px-3 text-center font-medium text-xl'>or</span>
					<span className='border-t border-gray-800 w-1/3 mt-3.5' />
				</div>
				<p className='text-center font-semibold text-sm text-gray-700'>
					Not a member?
					<Link href='/register'>
						<a className='text-blue-700'>
							Sign up
						</a>
					</Link>
				</p>
			</div>

		</section>

	)
}