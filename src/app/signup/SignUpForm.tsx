import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { BACKEND_URL } from '../../lib/constants';

const initialValues = { name: '', email: '', password: '' };

export const SignupForm = () => {
  const register = async (values: any) => {
    console.log(BACKEND_URL + '/auth/register');
    const res = await fetch(BACKEND_URL + '/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
      headers: {
        'Content-Type': 'application/json',
        /* 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,DELETE,PATCH,POST,PUT',
        'Access-Control-Allow-Headers':
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Access-Control-Allow-Credentials': 'true', */
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .min(4, 'Must be 4 or more character')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={register}
    >
      <Form>
        <label htmlFor='name'>Name</label>
        <Field name='name' type='text' />
        <ErrorMessage name='name' />

        <label htmlFor='email'>Email</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email' />

        <label htmlFor='password'>Password</label>
        <Field name='password' type='password' />
        <ErrorMessage name='password' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};
