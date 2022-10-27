import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ThemeProps from '@theme/types';

interface PostItemInGridStyles {
  postItemInGridContainer: ViewStyle;
  postItemInGridHeader: ViewStyle;
  postItemInGridImage: ImageStyle;
  postItemInGridAuthor: TextStyle;
  postItemInGridBody: ViewStyle;
  postItemInGridFooter: ViewStyle;
  likeIconContainer: ViewStyle;
  likedIcon: ViewStyle;
  notLikedIcon: ViewStyle;
  postItemInGridLikeCount: TextStyle;
}

const postItemInGridStyles = (theme: ThemeProps) =>
  StyleSheet.create<PostItemInGridStyles>({
    postItemInGridContainer: {},
    postItemInGridHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.sizes.spacing.XS,
      paddingHorizontal: theme.sizes.spacing.SM,
    },
    postItemInGridImage: {
      width: 32,
      height: 32,
      borderRadius: 32,
      resizeMode: 'cover',
    },
    postItemInGridAuthor: {
      marginLeft: theme.sizes.spacing.SM,
      fontWeight: 'bold',
    },
    postItemInGridBody: {},
    postItemInGridFooter: {
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
    postItemInGridLikeCount: {
      fontWeight: 'bold',
    },
  });

export default postItemInGridStyles;
