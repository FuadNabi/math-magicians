import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Home page test', () => {
  const tree = renderer.create(<Home />).toJSON;
  expect(tree).toMatchSnapshot();
});
