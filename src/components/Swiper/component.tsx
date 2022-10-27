import React, { useCallback } from 'react';
import { Dimensions, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = width;

interface ISwiper {
  images: string[];
}

const Swiper = ({ images }: ISwiper) => {
  const renderItem = useCallback(({ item: uri }: any) => {
    return (
      <FastImage
        source={{ uri, priority: FastImage.priority.normal }}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
      />
    );
  }, []);
  const keyExtractor = useCallback((image: any) => image, []);

  return (
    <FlatList
      data={images}
      initialNumToRender={1}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Swiper;
