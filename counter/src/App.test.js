import { mount, ShallowWrapper } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'


it("renders without crashing", () => {
  expect(<App />);
});

it('renders without crashing', () => {
  const page = expect(<App />);
  const theButton = <button>Normal Increment</button>;
  expect(page.contains(theButton)).toEqual(true);
});