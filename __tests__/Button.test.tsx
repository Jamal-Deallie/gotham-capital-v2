import { render, screen } from '@testing-library/react';
import {Button} from '@/components/Button';

describe('Button component', () => {
  test('Renders the button component without crashing', () => {
    render(<Button children={'test'} />);
  });
  test('Renders button without crashing', () => {
    render(<Button children='Sign up' />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
