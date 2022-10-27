import React, { useState, useCallback, useRef } from 'react';
import { Pressable, View, TextInput as RNTextInput, FlatList } from 'react-native';
import searchBarStyles from '@components/SearchBar/styles';
import useThemedStyles from '@hooks/useThemedStyles';
import ISearchBar from '@components/SearchBar/types';
import { TextInput, Typography } from '@components';
import SearchIcon from '@components/icons/SearchIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TypographyVariant } from '@components/Typography/types';
import PostItemInGrid from '@components/PostItemInGrid';
import tr from '../../l10n/tr.json';

const SearchBar = ({ posts }: ISearchBar) => {
  const styles = useThemedStyles(searchBarStyles);
  const [gridVisibility, setGridVisibility] = useState<boolean>(false);
  const [inputHeight, setInputHeight] = useState<number | undefined>(undefined);
  const insets = useSafeAreaInsets();
  const searchInputRef = useRef<RNTextInput | null>(null);
  const openGrid = useCallback(() => setGridVisibility(true), []);
  const closeGrid = useCallback(() => {
    setGridVisibility(false);
    searchInputRef?.current?.blur();
  }, []);

  const renderItem = useCallback(({ item }: any) => <PostItemInGrid post={item} />, []);
  const keyExtractor = useCallback((item: any) => item.id, []);

  return (
    <>
      <View
        style={styles.searchBarContainer}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          setInputHeight(height);
        }}
      >
        <TextInput
          inputRef={searchInputRef}
          onFocus={openGrid}
          containerStyle={styles.searchBarTextInputContainer}
          placeholder={tr.feed_screen_search_bar_placeholder}
          left={<SearchIcon width={18} height={18} style={styles.searchBarTextInputLeftIcon} />}
        />
        {gridVisibility && (
          <Pressable style={styles.searchBarCancelButton} onPress={closeGrid}>
            <Typography variant={TypographyVariant.PARAGRAPH} style={styles.searchBarCancelText}>
              {tr.feed_screen_search_bar_cancel}
            </Typography>
          </Pressable>
        )}
      </View>
      {gridVisibility && (
        <View
          style={[
            styles.searchBarGridContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              top: inputHeight ? insets.top + inputHeight : 100,
              bottom: inputHeight || 50,
            },
          ]}
        >
          <FlatList
            data={posts}
            initialNumToRender={5}
            removeClippedSubviews
            numColumns={3}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      )}
    </>
  );
};

export default SearchBar;
