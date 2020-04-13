import Validations from '../../constants/validations';

// TODO: move rules to vallidation libs
export default [
  {
    name: 'email',
    type: 'input',
    label: 'メールアドレス',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      { required: true, message: 'Please input!' },
    ],
  },
  {
    name: 'password',
    type: 'password',
    label: 'パスワード',
    rules: [{ required: true, message: 'Please input!' }],
  },
];