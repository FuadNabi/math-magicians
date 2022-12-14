import calculate from '../logic/calculate';

test('adds 10 + 10 to equal 20', () => {
  expect(calculate({
    total: '10',
    next: '10',
    operation: '+',
  }, '=')).toEqual({
    total: '20',
    next: null,
    operation: null,
  });
});

test('adds 10 x 10 to equal 100', () => {
  expect(calculate({
    total: '10',
    next: '10',
    operation: 'x',
  }, '=')).toEqual({
    total: '100',
    next: null,
    operation: null,
  });
});

test('adds 10 ÷ 10 to equal 1', () => {
  expect(calculate({
    total: '10',
    next: '10',
    operation: '÷',
  }, '=')).toEqual({
    total: '1',
    next: null,
    operation: null,
  });
});

test('adds 10 - 10 to equal 0', () => {
  expect(calculate({
    total: '10',
    next: '10',
    operation: '-',
  }, '=')).toEqual({
    total: '0',
    next: null,
    operation: null,
  });
});
