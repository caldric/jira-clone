import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Register from './Register';

let wrapper: ShallowWrapper;
beforeEach(() => {
  wrapper = shallow(<Register />);
});

test('Renders without errors', () => {
  const appComponent = wrapper.find('#Register');
  expect(appComponent).toHaveLength(1);
});

test('Displays text to sign up for new account', () => {
  const signupHeader = wrapper.find('#signup-header');
  expect(signupHeader.text().length).toBeGreaterThan(0);
});

describe('User registration form', () => {
  describe('Email address text input', () => {
    let emailInput: ShallowWrapper;

    beforeEach(() => {
      emailInput = wrapper.find('#email');
    });

    test('Renders without errors', () => {
      expect(emailInput).toHaveLength(1);
    });

    test('Has the "email" input type', () => {
      expect(emailInput.prop('type')).toBe('email');
    });

    test('User is able to type an email in the input', () => {
      // Create sample email
      const email: string = 'user@email.com';

      // Simulate user typing an email
      emailInput.simulate('change', { target: { value: email } });

      // Input text value should be equal to the email
      const inputText = wrapper.find('#email').prop('value');
      expect(inputText).toBe(email);
    });
  });

  describe('Password text input', () => {
    let passwordInput: ShallowWrapper;

    beforeEach(() => {
      passwordInput = wrapper.find('#password');
    });

    test('Renders without errors', () => {
      expect(passwordInput).toHaveLength(1);
    });

    test('Has the "password" input type', () => {
      expect(passwordInput.prop('type')).toBe('password');
    });

    test('User is able to type a password in the input', () => {
      // Create sample password
      const password: string = 'SamplePassword';

      // Simulate user typing an password
      passwordInput.simulate('change', { target: { value: password } });

      // Input text value should be equal to the password
      const inputText = wrapper.find('#password').prop('value');
      expect(inputText).toBe(password);
    });
  });

  describe('Sign up button', () => {
    test('Renders without errors', () => {});
  });
});

describe('Log in link', () => {
  test('Renders without errors', () => {});
});
