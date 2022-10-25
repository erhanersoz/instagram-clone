import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface SignInScreenStyles {
  signInScreenContainer: ViewStyle;
  signInScreenBody: ViewStyle;
  signInScreenInstagramLogoContainer: ViewStyle;
  signInScreenPasswordRightIconContainer: ViewStyle;
  signInScreenPasswordRightIcon: ViewStyle;
  signInScreenPasswordRightIconEye: ViewStyle;
  signInScreenPasswordRightIconEyeOff: ViewStyle;
  text: TextStyle;
}

const signInScreenStyles = (theme: ThemeProps) =>
  StyleSheet.create<SignInScreenStyles>({
    signInScreenContainer: {
      flexGrow: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    signInScreenBody: {
      flexGrow: 1,
      padding: theme.sizes.spacing.SCREEN,
      justifyContent: 'center',
    },
    signInScreenInstagramLogoContainer: {
      alignItems: 'center',
      paddingBottom: theme.sizes.spacing.SM,
    },
    signInScreenPasswordRightIconContainer: {
      paddingHorizontal: theme.sizes.spacing.XXS,
      height: '100%',
      flexShrink: 0,
      justifyContent: 'center',
    },
    signInScreenPasswordRightIcon: {
      paddingHorizontal: theme.sizes.spacing.XS,
    },
    signInScreenPasswordRightIconEye: {},
    signInScreenPasswordRightIconEyeOff: {
      color: theme.colors.WHITE,
    },
    text: {
      fontSize: 50,
    },
  });

export default signInScreenStyles;
