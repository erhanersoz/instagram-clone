import React from 'react';
import { TextInput as RNTextInput, TextInputProps, ViewStyle } from 'react-native';
import { FieldError } from 'react-hook-form/dist/types/errors';

interface ITextInput extends TextInputProps {
  inputRef?: React.MutableRefObject<RNTextInput | null> | undefined;
  left?: React.ReactElement | undefined;
  right?: React.ReactElement | undefined;
  fieldError?: FieldError | undefined;
  containerStyle?: ViewStyle | undefined;
}

export default ITextInput;
