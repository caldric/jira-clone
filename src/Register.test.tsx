import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Register from './Register';

const setup = () => shallow(<Register />);

let wrapper: ShallowWrapper;
beforeEach(() => {
  wrapper = setup();
});

test('Renders without errors', () => {
  const appComponent = wrapper.find('#Register');
  expect(appComponent.length).toBe(1);
});

test('Displays text to sign up for new account', () => {
  const signupHeader = wrapper.find('#signup-header');
  expect(signupHeader.text().length).toBeGreaterThan(0);
});

describe('Email address text input', () => {
  test('Renders without errors', () => {});
});

describe('Password text input', () => {
  test('Renders without errors', () => {});
});

describe('Sign up button', () => {
  test('Renders without errors', () => {});
});

describe('Log in link', () => {
  test('Renders without errors', () => {});
});
