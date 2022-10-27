import { StyleSheet, ViewStyle } from 'react-native';

interface FeedScreenStyles {
  feedScreenContainer: ViewStyle;
}

const feedScreenStyles = () =>
  StyleSheet.create<FeedScreenStyles>({
    feedScreenContainer: {
      flexGrow: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
  });

export default feedScreenStyles;
