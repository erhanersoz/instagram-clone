import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHeartOutlineIcon = (props: SvgProps) => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    accessibilityRole="image"
    stroke="currentColor"
    {...props}
  >
    <Path
      d="M22.0575 5C18 5 16 9 16 9C16 9 14 5 9.9425 5C6.645 5 4.03375 7.75875 4 11.0506C3.93125 17.8837 9.42062 22.7431 15.4375 26.8269C15.6034 26.9397 15.7994 27.0001 16 27.0001C16.2006 27.0001 16.3966 26.9397 16.5625 26.8269C22.5787 22.7431 28.0681 17.8837 28 11.0506C27.9662 7.75875 25.355 5 22.0575 5V5Z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgHeartOutlineIcon;
