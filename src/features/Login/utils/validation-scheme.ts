import * as yup from 'yup'

const password = () => {
  return yup
    .string()
    .required('Это поле обязательное!')
    .min(8, 'Пароль должен состоять минимум из 8 символов')
    .max(16, 'Пароль может быть больше 16 символов :(')
    .matches(/^(?=.*[A-Z])[a-zA-Z0-9]*$/, 'Некорректный пароль :(')
}

const email = () => {
  return yup.string().email('Не допустимый email адрес').required('Это поле обязательное!')
}

export const signInScheme = yup.object({
  email: email(),
  password: password(),
  rememberMe: yup.boolean(),
})

export const signUpScheme = yup.object({
  email: email(),
  password: password(),
  confirmPassword: password(),
  sendMessagesOnMail: yup.boolean(),
})

export const restoreScheme = yup.object({
  email: email(),
})
