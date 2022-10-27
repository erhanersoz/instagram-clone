import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface SearchBarStyles {
  searchBarContainer: ViewStyle;
  searchBarTextInputContainer: ViewStyle;
  searchBarTextInputLeftIcon: ViewStyle;
  searchBarCancelButton: ViewStyle;
  searchBarCancelText: TextStyle;
  searchBarGridContainer: ViewStyle;
}

const searchBarStyles = (theme: ThemeProps) =>
  StyleSheet.create<SearchBarStyles>({
    searchBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.sizes.spacing.SM,
      paddingVertical: theme.sizes.spacing.XS,
    },
    searchBarTextInputContainer: {
      flexGrow: 1,
      height: 35,
      borderWidth: 0,
      borderRadius: theme.sizes.borderRadius.CARD,
    },
    searchBarTextInputLeftIcon: {
      color: theme.colors.INPUT_PLACEHOLDER,
      alignSelf: 'center',
    },
    searchBarCancelButton: {
      paddingHorizontal: theme.sizes.spacing.XS,
      paddingVertical: theme.sizes.spacing.XXS,
    },
    searchBarCancelText: {
      fontWeight: 'bold',
    },
    searchBarGridContainer: {
      backgroundColor: theme.colors.CARD_BACKGROUND,
      position: 'absolute',
      zIndex: 9999999999,
      left: 0,
      right: 0,
    },
  });

export default searchBarStyles;
