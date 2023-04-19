import React, { useState } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, Input, InputAdornment, InputLabel, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import PasswordInput from '../../../common/components/PasswordInput/PasswordInput'
import { loginApi } from '../login-api'
import { signUpScheme } from '../utils/validation-scheme'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target={'_blank'} href="https://incseeuu.github.io/portfolio/#/">
        Incseeuu
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

type SignUpData = {
  email: string
  password: string
  confirmPassword: string
  sendMessagesOnMail: boolean
}

export const SignUp = () => {
  const navigation = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      sendMessagesOnMail: false,
    },
    resolver: yupResolver(signUpScheme),
    mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<SignUpData> = data => {
    if (data.password === data.confirmPassword) {
      loginApi.login({ email: data.email, password: data.password }).then(res => console.log(res))
    }
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Grid container spacing={2}>
              <TextField
                margin="normal"
                fullWidth
                label="Email Address"
                {...register('email')}
                autoComplete="email"
                autoFocus
                variant={'standard'}
              />
              <PasswordInput label={'Password'} register={register('password')} />
              <ErrorMessage errors={errors} name="password" as="p" />
              <PasswordInput label={'Confirm password'} register={register('confirmPassword')} />
              <ErrorMessage errors={errors} name="confirmPassword" as="p" />
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register('sendMessagesOnMail')}
                      checked={watch('sendMessagesOnMail')}
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigation('/login')}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>

      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
