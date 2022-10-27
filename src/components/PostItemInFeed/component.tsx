import React, { FC, useState } from 'react';
import { Dimensions, Pressable, View } from 'react-native';
import Typography from '@components/Typography';
import useThemedStyles from '@hooks/useThemedStyles';
import postItemInFeedStyles from '@components/PostItemInFeed/styles';
import IPostItemInFeed from '@components/PostItemInFeed/types';
import { TypographyVariant } from '@components/Typography/types';
import HeartIcon from '@components/icons/HeartIcon';
import HeartOutlineIcon from '@components/icons/HeartOutlineIcon';
import Swiper from '@components/Swiper';
import VideoPlayer from '@components/VideoPlayer';
import FastImage from 'react-native-fast-image';
import tr from '../../l10n/tr.json';

const { width } = Dimensions.get('window');

const renderSize = {
  width,
  height: width,
};

const PostItemInFeed: FC<IPostItemInFeed> = ({ post }) => {
  const styles = useThemedStyles(postItemInFeedStyles);
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = () => setLiked((prevState) => !prevState);
  const likeCount = liked ? post.likeCount + 1 : post.likeCount;

  return (
    <View style={styles.postItemInFeedContainer}>
      <View style={styles.postItemInFeedHeader}>
        <FastImage
          source={{ uri: post.avatar, priority: FastImage.priority.normal }}
          style={styles.postItemInFeedImage}
        />
        <Typography variant={TypographyVariant.PARAGRAPH} style={styles.postItemInFeedAuthor}>
          {post.name}
        </Typography>
      </View>
      <View style={styles.postItemInFeedBody}>
        {post.type === 'image' && <Swiper images={post.urls} />}
        {post.type === 'video' && <VideoPlayer renderSize={renderSize} uri={post.urls[0]} />}
      </View>
      <View style={styles.postItemInFeedFooter}>
        <Pressable onPress={toggleLike} style={styles.likeIconContainer}>
          {liked ? (
            <HeartIcon width={24} height={24} style={styles.likedIcon} />
          ) : (
            <HeartOutlineIcon width={24} height={24} style={styles.notLikedIcon} />
          )}
        </Pressable>
        <Typography style={styles.postItemInFeedLikeCount}>
          {/* eslint-disable-next-line react-native/no-raw-text */}
          {likeCount.toLocaleString('tr')}
          &nbsp;
          {tr.feed_screen_like_count}
        </Typography>
        {post.caption && (
          <Typography numberOfLines={2} variant={TypographyVariant.PARAGRAPH}>
            {post.caption}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default PostItemInFeed;
