import { createContext } from 'react';
import colors from '@theme/colors';
import typography from '@theme/typography';
import sizes from '@theme/sizes';

const themeContext = createContext({
  isThemeDark: true,
  colors,
  typography,
  sizes,
});

export default themeContext;
