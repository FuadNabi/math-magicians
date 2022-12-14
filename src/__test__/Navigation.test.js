import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';

test('Navigation page test', () => {
  const tree = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
