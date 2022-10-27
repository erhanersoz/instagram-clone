import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface PostItemInFeedStyles {
  postItemInFeedContainer: ViewStyle;
  postItemInFeedHeader: ViewStyle;
  postItemInFeedImage: ImageStyle;
  postItemInFeedAuthor: TextStyle;
  postItemInFeedBody: ViewStyle;
  postItemInFeedFooter: ViewStyle;
  likeIconContainer: ViewStyle;
  likedIcon: ViewStyle;
  notLikedIcon: ViewStyle;
  postItemInFeedLikeCount: TextStyle;
}

const postItemInFeedStyles = (theme: ThemeProps) =>
  StyleSheet.create<PostItemInFeedStyles>({
    postItemInFeedContainer: {},
    postItemInFeedHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.sizes.spacing.XS,
      paddingHorizontal: theme.sizes.spacing.SM,
    },
    postItemInFeedImage: {
      width: 32,
      height: 32,
      borderRadius: 32,
      resizeMode: 'cover',
    },
    postItemInFeedAuthor: {
      marginLeft: theme.sizes.spacing.SM,
      fontWeight: 'bold',
    },
    postItemInFeedBody: {},
    postItemInFeedFooter: {
      paddingVertical: theme.sizes.spacing.XS,
      paddingHorizontal: theme.sizes.spacing.SM,
    },
    likeIconContainer: {
      marginVertical: theme.sizes.spacing.XXS,
      alignSelf: 'flex-start',
    },
    likedIcon: {
      color: theme.colors.LIKE,
    },
    notLikedIcon: {
      color: theme.colors.WHITE,
    },
    postItemInFeedLikeCount: {
      fontWeight: 'bold',
    },
  });

export default postItemInFeedStyles;
