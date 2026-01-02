import { createTheme, ThemeProvider } from '@shadcn/ui';
import { FC, ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
      light: '#555',
      dark: '#111',
    },
    secondary: {
      main: '#666',
      light: '#777',
      dark: '#444',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  spacing: 8,
});

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig: FC<ThemeConfigProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { theme, ThemeConfig };
