import * as yup from 'yup';
import tr from '../../l10n/tr.json';

const PASSWORD_MIN = 6;

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().email(tr.sign_in_screen_email_input_invalid).required(tr.sign_in_screen_email_input_required),
  password: yup
    .string()
    .required(tr.sign_in_screen_password_input_required)
    .min(PASSWORD_MIN, tr.sign_in_screen_password_input_minimum_characters),
});

export default loginFormValidationSchema;
