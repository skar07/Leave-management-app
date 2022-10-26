import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

import { AUTH_TOKEN } from '../app/constants';
import { gql, useMutation } from '@apollo/client';
export default function CreateAccount() {
    const router = useRouter()
    const [formState, setFormState] = React.useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });
    const handleClick = () => {
        const SIGNUP_MUTATION = gql`
            mutation SignupMutation(
                $email: String!
                $password: String!
                $name: String!
            )
            @rest(
                type: "Signup", 
                path: "https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/signup", 
                method: "POST"
                ) {               
                    email: $email
                    password: $password
                    data: {
                        name: $name
                    }   
                {
                    token
                }
            }
        `;
        const [signup] = useMutation(SIGNUP_MUTATION, {
            variables: {
                email: formState.email,
                password: formState.password,
                name: formState.name
            },
            onCompleted: ({ signup }) => {
                localStorage.setItem(AUTH_TOKEN, signup.token)
                router.push('/app/index');
            }
        })

    }
    return (
        <div className='static w-full flex align-bottom'>
            <div className='absolute font-semibold top-20 left-20 z-10 space-y-3'>
                <h2 className='text-4xl'>Hello!</h2>
                <h3 className='text-2xl'>Please sign in to check your applied leaves</h3>
            </div>
            <Image
                src='/../public/employee_image.jpg'
                alt='Picture of employee'
                width={1100}
                height={930}
            />
            <div className='xl:w-1/3 mt-28 h-full w-fit px-28 py-12  border border-blue-300 shadow-lg shadow-blue-300 flex flex-col justify-items:center rounded-2xl space-y-8'>
                <h3 className='text-2xl font-semibold text-blue-600 text-center'>Sign up</h3>
                <input type='text' placeholder='Name' className='py-3.5 px-3 mt-7 w-full text-left rounded-xl border border-blue-300 ' required />
                <input type='email' placeholder='Email address' className='py-3.5 px-3 mt-7 w-full text-left rounded-xl border border-blue-300 ' required />
                <input type='password' placeholder='Password' className='py-3.5 px-3 mt-7 w-full text-left rounded-xl border border-blue-300 ' required />
                <div className='flex space-x-2 justify-center'>
                    <input type='checkbox' required />
                    <p className='text-sm font-semibold text-gray-700'>I agree to all <a href='#' className=' text-blue-600'>terms and conditions</a></p>
                </div>
                <button className='px-10 py-3.5 text-white font-semibold text-lg bg-blue-700 rounded-xl'>Sign up</button>
                <div className='flex justify-center text-gray-800 align-center'>
                    <span className='border-t border-gray-800 w-1/3 mt-3.5' />
                    <span className='px-3 text-center font-medium text-xl'>or</span>
                    <span className='border-t border-gray-800 w-1/3 mt-3.5' />
                </div>
                <p className='text-center font-semibold text-sm text-gray-700'>Already a member? <a href='/login' className='text-blue-700'>Sign in</a></p>
            </div>
        </div>
    )
}
