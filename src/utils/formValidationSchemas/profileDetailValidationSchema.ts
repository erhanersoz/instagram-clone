import * as yup from 'yup';
import I18n from 'i18n-js';
import phoneRegex from '@utils/regularExpressions/phoneRegex';

const phoneRegexp = new RegExp(phoneRegex);

const profileDetailValidationSchema = yup.object().shape({
  name: yup.string().required(I18n.t('required_name')),
  phone: yup.string().matches(phoneRegexp, I18n.t('invalid_phone_number')),
  email: yup.string().email(I18n.t('invalid_email')),
  country: yup.string(),
  city: yup.string(),
  state: yup.string(),
  postCode: yup.string(),
  address: yup.string(),
});

export default profileDetailValidationSchema;
