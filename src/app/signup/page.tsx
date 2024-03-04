'use client';
import React, { useRef } from 'react';
import { SignupForm } from './SignUpForm';

const SignupPage = () => {
  return (
    <div>
      <div className='p-2'>Sign up</div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
