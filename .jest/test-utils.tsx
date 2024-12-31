import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';

type ProvidersProps = {
  readonly children?: ReactNode;
};

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }: ProvidersProps): ReactNode => {
  return children;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render> =>
  render(ui, {
    wrapper: Providers,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
