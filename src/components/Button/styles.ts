import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface ButtonStyles {
  buttonContainer: ViewStyle;
  disabledButtonContainer: ViewStyle;
  buttonLabel: TextStyle;
}

const buttonStyles = (theme: ThemeProps) =>
  StyleSheet.create<ButtonStyles>({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      borderRadius: theme.sizes.borderRadius.DEFAULT,
      height: 45,
      paddingHorizontal: theme.sizes.spacing.XS,
      paddingVertical: theme.sizes.spacing.XS,
      backgroundColor: theme.colors.DEFAULT_BUTTON_BACKGROUND,
    },
    disabledButtonContainer: {
      opacity: 0.6,
    },
    buttonLabel: {
      fontSize: theme.typography.PARAGRAPH,
      fontWeight: 'bold',
      color: theme.colors.WHITE,
      flexGrow: 1,
      textAlign: 'center',
      alignSelf: 'center',
    },
  });

export default buttonStyles;
