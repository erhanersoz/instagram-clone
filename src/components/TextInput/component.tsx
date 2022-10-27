import React from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import textInputStyles from '@components/TextInput/styles';
import useThemedStyles from '@hooks/useThemedStyles';
import ITextInput from '@components/TextInput/types';

const TextInput = ({ left, right, inputRef, fieldError, containerStyle, style, ...rest }: ITextInput) => {
  const styles = useThemedStyles(textInputStyles);

  return (
    <View style={[styles.textInputContainer, fieldError && styles.textInputContainerError, containerStyle]}>
      {left}
      <RNTextInput ref={inputRef} keyboardAppearance="dark" style={[styles.textInput, style]} {...rest} />
      {right}
    </View>
  );
};

export default TextInput;
