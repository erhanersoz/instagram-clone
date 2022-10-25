import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from '@components';
import IControlledTextInput from '@components/ControlledTextInput/types';
import Typography from '@components/Typography/component';
import { View } from 'react-native';
import useThemedStyles from '@hooks/useThemedStyles';
import controlledTextInputStyles from '@components/ControlledTextInput/styles';
import { TypographyVariant } from '@components/Typography/types';

const defaultProps: Partial<IControlledTextInput> = {
  inputRef: undefined,
  fieldError: undefined,
  inputStyle: undefined,
};

const ControlledTextInput = ({ control, inputRef, name, fieldError, inputStyle, ...rest }: IControlledTextInput) => {
  const styles = useThemedStyles(controlledTextInputStyles);

  return (
    <View style={styles.controlledTextInputContainer}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            inputRef={inputRef}
            fieldError={fieldError}
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      <Typography variant={TypographyVariant.CAPTION} style={styles.controlledTextInputFieldError}>
        {fieldError?.message}
      </Typography>
    </View>
  );
};

ControlledTextInput.defaultProps = defaultProps;

export default ControlledTextInput;
