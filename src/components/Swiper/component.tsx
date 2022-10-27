import React from 'react';
import { Dimensions, FlatList, ImageRequireSource } from 'react-native';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = width;

interface ISwiper {
  data: ImageRequireSource[];
}

const Swiper = ({ data }: ISwiper) => {
  const renderItem = ({ item }: { item: ImageRequireSource }) => {
    return (
      <FastImage
        defaultSource={item}
        source={{ priority: FastImage.priority.normal }}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
        }}
      />
    );
  };

  return (
    <FlatList
      data={data}
      initialNumToRender={1}
      renderItem={renderItem}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Swiper;
