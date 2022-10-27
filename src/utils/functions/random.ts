import { ImageRequireSource } from 'react-native';

export const getImage = (number: number): ImageRequireSource => {
  switch (number) {
    case 1:
      return require('../../assets/images/1.jpg');
    case 2:
      return require('../../assets/images/2.png');
    case 3:
      return require('../../assets/images/3.jpg');
    case 4:
      return require('../../assets/images/4.jpg');
    case 5:
      return require('../../assets/images/5.jpg');
    case 6:
      return require('../../assets/images/6.jpg');
    case 7:
      return require('../../assets/images/7.jpg');
    case 8:
      return require('../../assets/images/8.jpg');
    case 9:
      return require('../../assets/images/9.png');
    case 10:
      return require('../../assets/images/10.png');
    default:
      return require('../../assets/images/1.jpg');
  }
};

export const randomImportImage = () => {
  const random = Math.floor(Math.random() * 10) + 1;
  return getImage(random);
};

export const randomImport2Images = () => {
  return [randomImportImage(), randomImportImage()];
};

export const getVideo = (number: number) => {
  switch (number) {
    case 1:
      return require('../../assets/videos/1.mp4');
    case 2:
      return require('../../assets/videos/2.mp4');
    case 3:
      return require('../../assets/videos/3.mp4');
    case 4:
      return require('../../assets/videos/4.mp4');
    case 5:
      return require('../../assets/videos/5.mp4');
    case 6:
      return require('../../assets/videos/6.mp4');
    case 7:
      return require('../../assets/videos/7.mp4');
    case 8:
      return require('../../assets/videos/8.mp4');
    case 9:
      return require('../../assets/videos/9.mp4');
    case 10:
      return require('../../assets/videos/10.mp4');
    default:
      return require('../../assets/videos/1.mp4');
  }
};

export const randomImportVideo = () => {
  const random = Math.floor(Math.random() * 10) + 1;
  return getVideo(random);
};
