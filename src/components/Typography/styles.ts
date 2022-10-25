import { StyleSheet, TextStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface ITypographyStyles {
  typographyCaptionStyle: TextStyle;
  typographyParagraphStyle: TextStyle;
  typographySubheadingStyle: TextStyle;
  typographyTitleStyle: TextStyle;
  typographyHeadlineStyle: TextStyle;
  typographyBold: TextStyle;
  alignRight: TextStyle;
  alignCenter: TextStyle;
}

const typographyStyles = (theme: ThemeProps) =>
  StyleSheet.create<ITypographyStyles>({
    typographyCaptionStyle: {
      color: theme.colors.CAPTION,
      fontSize: theme.typography.CAPTION,
    },
    typographyParagraphStyle: {
      color: theme.colors.PARAGRAPH,
      fontSize: theme.typography.PARAGRAPH,
    },
    typographySubheadingStyle: {
      color: theme.colors.SUBHEADING,
      fontSize: theme.typography.SUBHEADING,
    },
    typographyTitleStyle: {
      color: theme.colors.TITLE,
      fontSize: theme.typography.TITLE,
    },
    typographyHeadlineStyle: {
      color: theme.colors.HEADLINE,
      fontSize: theme.typography.HEADLINE,
    },
    typographyBold: {
      fontWeight: 'bold',
    },
    alignRight: {
      textAlign: 'right',
    },
    alignCenter: {
      textAlign: 'center',
    },
  });

export default typographyStyles;
