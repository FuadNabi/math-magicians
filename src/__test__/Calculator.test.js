import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import Calculator from '../components/Calculator';

test('Calculator screen is equal to 0', () => {
  const tree = render(<Calculator />);
  const calculatorInput = tree.container.querySelector('.calc-section');
  expect(calculatorInput.innerHTML).toBe('0  ');
});

test('Calculator page test', () => {
  const tree = renderer.create(<Calculator />).toJSON;
  expect(tree).toMatchSnapshot();
});

test('Ther user type 2 + 2', () => {
  const tree = render(<Calculator />);
  const calculatorInput = tree.container.querySelector('.calc-section');
  let button = tree.getByText('2');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('  2');
  button = tree.getByText('+');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('2 + ');
  button = tree.getByText('2');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('2 + 2');
  button = tree.getByText('=');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('4  ');
});

test('Ther user tries devide by 0', () => {
  const tree = render(<Calculator />);
  const calculatorInput = tree.container.querySelector('.calc-section');
  let button = tree.getByText('2');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('  2');
  button = tree.getByText('÷');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('2 ÷ ');
  button = tree.getByText('0');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('2 ÷ 0');
  button = tree.getByText('=');
  fireEvent.click(button);
  expect(calculatorInput.innerHTML).toBe('Can\'t divide by 0.  ');
});
