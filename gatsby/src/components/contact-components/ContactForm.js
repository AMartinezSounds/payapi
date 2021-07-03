import React from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) =>
  new Promise((resolve) => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, 0));
      resolve();
    }, 1000);
  });

function ContactForm() {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Enter your name';
        }
        if (!values.email) {
          errors.email = 'Enter an email';
        } else if (!values.email.includes('@')) {
          errors.email = 'Enter a valid email';
        }
      }}
      render={({ handleSubmit, values, pristine, submitting }) => (
        <form onSubmit={handleSubmit} className="flexColumn contactForm">
          <div>
            <Field name="name">
              {({ input, meta }) => (
                <div>
                  <div>
                    <input
                      className="contactInput"
                      {...input}
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <div>
                    <input
                      className="contactInput"
                      {...input}
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field name="companyName">
              {({ input, meta }) => (
                <div>
                  <div>
                    <input
                      className="contactInput"
                      {...input}
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field name="title">
              {({ input, meta }) => (
                <div>
                  <div>
                    <input
                      className="contactInput"
                      {...input}
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                  <div className="error">
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              className="contactInput"
              name="message"
              component="textarea"
              type="text"
              placeholder="Message"
            />
          </div>
          <div className="checkbox-with-label">
            <Field
              name="updates"
              component="input"
              type="checkbox"
              value="updates"
            />
            <label>
              Stay up-to-date with company announcements and updates to our API
            </label>
          </div>
          <button
            className="linkButton pricingButton"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
        </form>
      )}
    />
  );
}

export default ContactForm;
