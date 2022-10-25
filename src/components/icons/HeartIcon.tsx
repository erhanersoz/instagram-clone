import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHeartIcon = (props: SvgProps) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" accessibilityRole="image" fill="currentColor" {...props}>
    <Path d="M16 28C15.5986 27.9995 15.2066 27.8782 14.875 27.6519C9.96312 24.3175 7.83624 22.0313 6.66312 20.6019C4.16312 17.555 2.96624 14.4269 2.99999 11.0394C3.03937 7.1575 6.15374 4 9.94249 4C12.6975 4 14.6056 5.55188 15.7169 6.84438C15.7521 6.88491 15.7956 6.91741 15.8444 6.93968C15.8933 6.96195 15.9463 6.97348 16 6.97348C16.0537 6.97348 16.1067 6.96195 16.1556 6.93968C16.2044 6.91741 16.2479 6.88491 16.2831 6.84438C17.3944 5.55063 19.3025 4 22.0575 4C25.8462 4 28.9606 7.1575 29 11.04C29.0337 14.4281 27.8356 17.5563 25.3369 20.6025C24.1637 22.0319 22.0369 24.3181 17.125 27.6525C16.7934 27.8786 16.4014 27.9997 16 28V28Z" />
  </Svg>
);
export default SvgHeartIcon;