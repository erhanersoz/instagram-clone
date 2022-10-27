import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface ControlledTextInputStyles {
  controlledTextInputContainer: ViewStyle;
  controlledTextInputFieldError: TextStyle;
}

const controlledTextInputStyles = (theme: ThemeProps) =>
  StyleSheet.create<ControlledTextInputStyles>({
    controlledTextInputContainer: {
      marginBottom: theme.sizes.spacing.XS,
    },
    controlledTextInputFieldError: {
      marginTop: 2,
      color: theme.colors.ERROR,
    },
  });

export default controlledTextInputStyles;
