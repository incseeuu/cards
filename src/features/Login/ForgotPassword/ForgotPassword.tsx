import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { restoreScheme } from '../utils/validation-scheme'

type RestoreFormData = {
  email: string
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RestoreFormData>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(restoreScheme),
    mode: 'onBlur',
  })
  const onSubmit: SubmitHandler<RestoreFormData> = data => {
    console.log(data)
  }

  const navigation = useNavigate()

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
            Forget Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              variant={'standard'}
              {...register('email')}
            />
            <div style={{ alignSelf: 'start' }}>
              <ErrorMessage errors={errors} name="email" as="p" />
            </div>
            <Typography component="p" sx={{ mt: 2, opacity: 0.5 }}>
              Enter your email address and we will send you further instructions
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ borderRadius: '30px' }}
            >
              Send Instructions
            </Button>
          </Box>
          <Typography component="p" sx={{ mt: 2, opacity: 0.5 }}>
            Did you remember your password?
          </Typography>
          <Link sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigation('/login')}>
            Try Logged In
          </Link>
        </Box>
      </Paper>
    </Container>
  )
}

export default ForgotPassword
