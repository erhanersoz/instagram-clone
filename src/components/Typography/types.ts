import { TextProps } from 'react-native';

export enum TypographyVariant {
  CAPTION = 'CAPTION',
  PARAGRAPH = 'PARAGRAPH',
  SUBHEADING = 'SUBHEADING',
  TITLE = 'TITLE',
  HEADLINE = 'HEADLINE',
}

interface ITypography extends TextProps {
  variant?: TypographyVariant | undefined;
}

export default ITypography;
