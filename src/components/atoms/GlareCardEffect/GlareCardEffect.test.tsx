import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { GlareCardEffect } from '.';

describe('GlareCardEffect', () => {
  test('renders GlareCardEffect component', () => {
    render(<GlareCardEffect />);
    const element = screen.getByText(/GlareCardEffect/i);
    expect(element).toBeInTheDocument();
  });
});
