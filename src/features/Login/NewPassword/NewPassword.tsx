import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import PasswordInput from '../../../common/components/PasswordInput/PasswordInput'

type FormData = {
  password: string
}

const schema = yup.object({
  password: yup
    .string()
    .required('Это поле обязательное!')
    .min(8, 'Пароль должен состоять минимум из 8 символов')
    .max(16, 'Пароль может быть больше 16 символов :(')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Некорректный пароль :('),
})

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 12 }}>
      <CssBaseline />
      <Paper elevation={2} style={{ padding: '20px' }}>
        <Box
          sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
            Create new password
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <PasswordInput label={'Password'} register={register('password')} />
            <ErrorMessage errors={errors} name="password" as="p" />
            <Typography component="p" sx={{ mt: 2, opacity: 0.5, textAlign: 'center' }}>
              Create new password and we will send you further instructions to email
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ borderRadius: '30px' }}
            >
              Create new password
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default NewPassword
