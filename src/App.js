import React from 'react';
import { useFormik } from 'formik';

// Custom validation function
const validateForm = values => {
  const errors = {};

  // Email validation
  if (!values.email) {
    errors.email = 'Field required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Username should be an email';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Field required';
  }

  return errors;
};

function App() {
  // useFormik hook
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate: validateForm,
    onSubmit: values => {
      alert('Login Successful');
    },
  });

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="pswError">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;