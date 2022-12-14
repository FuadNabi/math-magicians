import operate from '../logic/operate';

test('adds 10 x 10 to equal 0', () => {
  expect(operate(10, 10, '-')).toEqual('0');
});

test('adds 10 x 10 to equal 100', () => {
  expect(operate(10, 10, 'x')).toEqual('100');
});

test('adds 10 + 10 to equal 20', () => {
  expect(operate(10, 10, '+')).toEqual('20');
});

test('adds 10 ÷ 10 to equal 1', () => {
  expect(operate(10, 10, '÷')).toEqual('1');
});
