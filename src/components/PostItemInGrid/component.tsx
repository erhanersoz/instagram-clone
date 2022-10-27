import React, { FC } from 'react';
import { Dimensions, View } from 'react-native';
import useThemedStyles from '@hooks/useThemedStyles';
import postItemInGridStyles from '@components/PostItemInGrid/styles';
import IPostItemInGrid from '@components/PostItemInGrid/types';
import VideoPlayer from '@components/VideoPlayer';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const renderSize: {
  width: number;
  height: number;
} = {
  width: width / 3,
  height: width / 3,
};

const PostItemInGrid: FC<IPostItemInGrid> = ({ post }) => {
  const styles = useThemedStyles(postItemInGridStyles);

  return (
    <View style={styles.postItemInGridContainer}>
      <View style={styles.postItemInGridBody}>
        {post.type === 'image' && (
          <FastImage style={{ ...renderSize }} source={{ uri: post.urls[0], priority: FastImage.priority.normal }} />
        )}
        {post.type === 'video' && <VideoPlayer renderSize={renderSize} uri={post.urls[0]} />}
      </View>
    </View>
  );
};

export default PostItemInGrid;
