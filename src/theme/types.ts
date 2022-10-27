import { ThemeDarkColors } from './colors';
import { ThemeTypography } from './typography';
import { ThemeSizes } from './sizes';

type ThemeProps = {
  colors: ThemeDarkColors;
  typography: ThemeTypography;
  sizes: ThemeSizes;
  isThemeDark: boolean;
};

export default ThemeProps;
