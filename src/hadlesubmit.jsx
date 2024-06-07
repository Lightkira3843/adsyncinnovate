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
  