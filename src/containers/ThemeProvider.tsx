import React, { FC, ReactNode, useMemo } from 'react';
import colors from '@theme/colors';
import typography from '@theme/typography';
import sizes from '@theme/sizes';
import ThemeContext from '@contexts/themeContext';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const memoizedValue = useMemo(
    () => ({
      isThemeDark: true,
      colors,
      typography,
      sizes,
    }),
    [],
  );
  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
