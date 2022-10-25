import { Control } from 'react-hook-form';
import React from 'react';
import { StyleProp, TextInput as RNTextInput, TextStyle } from 'react-native';
import { FieldError } from 'react-hook-form/dist/types/errors';
import ITextInput from '@components/TextInput/types';

interface IControlledTextInput extends ITextInput {
  control: Control<any>;
  inputRef?: React.MutableRefObject<RNTextInput | null> | undefined;
  name: string;
  fieldError?: FieldError | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
}

export default IControlledTextInput;
