// src/AuthPage.jsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, db } from './firebase'; // Import the auth and db modules from firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './auth.css'; // Import the CSS file

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    company: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      if (isSignUp) {
        // Handle sign-up logic here
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;

        // Save additional user information to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: values.name,
          username: values.username,
          company: values.company,
          email: values.email,
        });

        console.log('Sign Up successful', values);
      } else {
        // Handle login logic here
        await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log('Login successful', values);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setSubmitting(false);
  };

  return (
    <div className="auth-container">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <Formik
        initialValues={{
          name: '',
          username: '',
          company: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={isSignUp ? SignUpSchema : LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="auth-form">
            {isSignUp && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field name="username" type="text" />
                  <ErrorMessage name="username" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <Field name="company" type="text" />
                  <ErrorMessage name="company" component="div" className="error-message" />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field name="confirmPassword" type="password" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>
            )}
            <button type="submit" className="auth-button" disabled={isSubmitting}>
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
