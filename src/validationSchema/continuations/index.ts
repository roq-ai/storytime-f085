import * as yup from 'yup';

export const continuationValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
