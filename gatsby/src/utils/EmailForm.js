import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) =>
  new Promise((resolve) => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, 0));
      resolve();
    }, 1000);
  });
function EmailForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Enter an email';
        } else if (!values.email.includes('@')) {
          errors.email = 'Enter a valid email';
        }
        return errors;
      }}
      render={({ handleSubmit, pristine, submitting }) => (
        <form
          className="inLine"
          onSubmit={handleSubmit}
          disabled={pristine || submitting}
        >
          <div>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <div>
                    <input
                      className="emailInput"
                      {...input}
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
          </div>
          <button className="buttonEmail" type="submit">
            Schedule a Demo
          </button>
        </form>
      )}
    />
  );
}

export default EmailForm;
