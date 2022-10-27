import React, { FC } from 'react';
import { Text } from 'react-native';
import ITypography, { TypographyVariant } from '@components/Typography/types';
import useThemedStyles from '@hooks/useThemedStyles';
import typographyStyles from '@components/Typography/styles';

const Typography: FC<ITypography> = ({ variant, children, style, ...rest }) => {
  const styles = useThemedStyles(typographyStyles);
  let defaultStyle;
  switch (variant) {
    case TypographyVariant.CAPTION:
      defaultStyle = styles.typographyCaptionStyle;
      break;
    case TypographyVariant.PARAGRAPH:
      defaultStyle = styles.typographyParagraphStyle;
      break;
    case TypographyVariant.SUBHEADING:
      defaultStyle = styles.typographySubheadingStyle;
      break;
    case TypographyVariant.TITLE:
      defaultStyle = styles.typographyTitleStyle;
      break;
    case TypographyVariant.HEADLINE:
      defaultStyle = styles.typographyHeadlineStyle;
      break;
    default:
      defaultStyle = styles.typographyParagraphStyle;
  }

  return (
    <Text style={[defaultStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
