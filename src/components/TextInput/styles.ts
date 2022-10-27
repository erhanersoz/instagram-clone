import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface TextInputStyles {
  textInputContainer: ViewStyle;
  textInputContainerError: ViewStyle;
  textInput: TextStyle;
}

const textInputStyles = (theme: ThemeProps) =>
  StyleSheet.create<TextInputStyles>({
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      borderWidth: 1,
      borderColor: theme.colors.BORDER_PRIMARY,
      borderRadius: theme.sizes.borderRadius.DEFAULT,
      height: 45,
      paddingHorizontal: theme.sizes.spacing.XS,
      backgroundColor: theme.colors.INPUT_BACKGROUND,
    },
    textInputContainerError: {
      borderColor: theme.colors.ERROR,
    },
    textInput: {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: 1,
      paddingHorizontal: theme.sizes.spacing.XS,
      paddingVertical: theme.sizes.spacing.XS,
      color: theme.colors.PARAGRAPH,
      fontSize: theme.typography.PARAGRAPH,
    },
  });

export default textInputStyles;
