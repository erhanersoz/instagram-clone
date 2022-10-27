import React, { useState, useRef, useCallback } from 'react';
import { SafeAreaView, View, TextInput as RNTextInput, Pressable } from 'react-native';
import InstagramLogo from '@components/logos/InstagramLogo';
import signInScreenStyles from '@screens/SingInScreen/styles';
import useThemedStyles from '@hooks/useThemedStyles';
import { Button, ControlledTextInput } from '@components';
import { useForm } from 'react-hook-form';
import EyeIcon from '@components/icons/EyeIcon';
import EyeOffIcon from '@components/icons/EyeOffIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import loginFormValidationSchema from '@utils/formValidationSchemas/loginFormValidationSchema';
import ISignInScreen from '@screens/SingInScreen/types';
import tr from '../../l10n/tr.json';

type SignInFormData = {
  email: string;
  password: string;
};

const SignInScreen = ({ route }: ISignInScreen) => {
  const styles = useThemedStyles(signInScreenStyles);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const signInEmailInputRef = useRef<RNTextInput | null>(null);
  const signInPasswordInputRef = useRef<RNTextInput | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    mode: 'all',
    resolver: yupResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {
    route?.params?.navigateToFeedStack();
  };

  const togglePasswordVisible = useCallback(() => setPasswordVisible((prevState) => !prevState), []);

  return (
    <SafeAreaView style={styles.signInScreenContainer}>
      <View style={styles.signInScreenBody}>
        <View style={styles.signInScreenInstagramLogoContainer}>
          <InstagramLogo height={75} width={210} />
        </View>
        <View>
          <ControlledTextInput
            control={control}
            inputRef={signInEmailInputRef}
            name="email"
            placeholder={tr.sign_in_screen_email_input_placeholder}
            fieldError={errors.email}
            // editable={!loading}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            returnKeyType="next"
            keyboardType="email-address"
            textContentType="emailAddress"
            blurOnSubmit
            onSubmitEditing={() => signInPasswordInputRef.current?.focus()}
          />
          <ControlledTextInput
            control={control}
            name="password"
            placeholder={tr.sign_in_screen_password_input_placeholder}
            fieldError={errors.password}
            secureTextEntry={!passwordVisible}
            // editable={!loading}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            returnKeyType="go"
            keyboardType="default"
            textContentType="password"
            blurOnSubmit
            inputRef={signInPasswordInputRef}
            right={
              <Pressable onPress={togglePasswordVisible} style={styles.signInScreenPasswordRightIconContainer}>
                {passwordVisible ? (
                  <EyeIcon width={28} height={28} />
                ) : (
                  <EyeOffIcon width={28} height={28} style={styles.signInScreenPasswordRightIconEyeOff} />
                )}
              </Pressable>
            }
            onSubmitEditing={handleSubmit(onSubmit)}
          />
          <Button onPress={handleSubmit(onSubmit)} disabled={!isValid} label={tr.sign_in_screen_submit_button_label} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
