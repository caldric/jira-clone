import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Renders without errors', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('.App')
  expect(appComponent.length).toBe(1)
});
