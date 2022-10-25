import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CreateAccount() {
    const router = useRouter()
    const [formState, setFormState] = React.useState({
        login: true,
        email: '',
        password: '',
  });
    return (
        <div></div>
    )
}
