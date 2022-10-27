import { useContext } from 'react';
import ThemeProps from '@theme/types';
import ThemeContext from '@contexts/themeContext';

const useTheme = () => {
  const { colors, typography, sizes, isThemeDark } = useContext(ThemeContext);
  const theme: ThemeProps = {
    colors,
    typography,
    sizes,
    isThemeDark,
  };
  return theme;
};

export default useTheme;
