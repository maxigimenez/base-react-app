import React from 'react';
import { render } from '@testing-library/react';
import { TodoList } from './todo-list';

test('renders learn react link', () => {
  const { getByText } = render(<TodoList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
