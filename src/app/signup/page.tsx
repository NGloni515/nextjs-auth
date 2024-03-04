'use client';
import { BACKEND_URL } from '@/lib/constants';
import Link from 'next/link';
import React, { useRef } from 'react';
import { SignupForm } from './SignUpForm';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(BACKEND_URL + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert('User Registered!');
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: '',
    email: '',
    password: '',
  });
  return (
    <div className='m-2 border rounded overflow-hidden shadow'>
      <div className='p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600'>
        Sign up
      </div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
