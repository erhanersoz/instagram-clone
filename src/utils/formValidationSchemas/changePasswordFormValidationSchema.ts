import * as yup from 'yup';
import I18n from 'i18n-js';

const PASSWORD_MIN = 6;

const changePasswordFormValidationSchema = yup.object().shape({
  oldPassword: yup.string().required(I18n.t('required_old_password')),
  newPassword: yup
    .string()
    .min(PASSWORD_MIN, I18n.t('invalid_password', { number: PASSWORD_MIN }))
    .notOneOf([yup.ref('oldPassword')], I18n.t('must_not_be_the_same_as_the_current_password'))
    .required(I18n.t('required_new_password')),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword')], I18n.t('passwords_do_not_match'))
    .required(I18n.t('required_new_password_confirm')),
});

export default changePasswordFormValidationSchema;
