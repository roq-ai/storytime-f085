import * as yup from 'yup';

export const voteValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  continuation_id: yup.string().nullable(),
});
