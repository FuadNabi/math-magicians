import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Home page test', () => {
  const tree = renderer.create(<Quote />).toJSON;
  expect(tree).toMatchSnapshot();
});
