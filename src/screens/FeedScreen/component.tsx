import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList, Dimensions } from 'react-native';
import useThemedStyles from '@hooks/useThemedStyles';
import feedScreenStyles from '@screens/FeedScreen/styles';
import PostItemInFeed from '@components/PostItemInFeed';
import SearchBar from '@components/SearchBar';
import getAllPosts from '../../api';

const windowHeight = Dimensions.get('window').height;

const FeedScreen = () => {
  const styles = useThemedStyles(feedScreenStyles);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts?.length === 0) {
      getAllPosts().then((res) => setPosts(res));
    }
  }, [posts?.length]);

  const renderItem = useCallback(({ item }: any) => <PostItemInFeed post={item} />, []);
  const keyExtractor = useCallback((item: any) => item.id, []);
  const snapToInterval = useMemo(() => windowHeight, []);

  return (
    <SafeAreaView style={styles.feedScreenContainer}>
      <SearchBar posts={posts} />
      <FlatList
        data={posts}
        removeClippedSubviews
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        snapToInterval={snapToInterval}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
