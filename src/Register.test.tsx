import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

test('Renders without errors', () => {
  const wrapper = shallow(<Register />);
  const appComponent = wrapper.find('#Register');
  expect(appComponent.length).toBe(1);
});

test('Displays text to sign up for new account', () => {});

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
