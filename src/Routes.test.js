import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render App', () => {
  const { container } = render(<App data-testid="app" />);
  expect(container).toBeTruthy();
});
