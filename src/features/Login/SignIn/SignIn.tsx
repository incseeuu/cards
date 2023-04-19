import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Checkbox, FormControlLabel, Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import PasswordInput from '../../../common/components/PasswordInput/PasswordInput'
import { signInScheme } from '../utils/validation-scheme'

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

type SignInData = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const navigation = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInData>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(signInScheme),
    mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<SignInData> = data => {
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              variant={'standard'}
              {...register('email')}
            />
            <ErrorMessage errors={errors} name="email" as="p" />
            <PasswordInput label={'Password'} register={register('password')} />
            <ErrorMessage errors={errors} name="password" as="p" />
            <FormControlLabel
              control={
                <Checkbox
                  {...register('rememberMe')}
                  checked={watch('rememberMe')}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ borderRadius: '30px' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={() => navigation('/restore')}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigation('/registration')}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Paper>
    </Container>
  )
}
