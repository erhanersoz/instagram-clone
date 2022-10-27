import React, { FC } from 'react';
import { Pressable as RNPressable } from 'react-native';
import IButton from '@components/Button/types';
import Typography from '@components/Typography';
import useThemedStyles from '@hooks/useThemedStyles';
import buttonStyles from '@components/Button/styles';

const Button: FC<IButton> = ({ disabled, label, children, style, ...rest }) => {
  const styles = useThemedStyles(buttonStyles);

  return (
    <RNPressable style={[styles.buttonContainer, disabled && styles.disabledButtonContainer, style]} {...rest}>
      {children || <Typography style={styles.buttonLabel}>{label}</Typography>}
    </RNPressable>
  );
};

export default Button;
