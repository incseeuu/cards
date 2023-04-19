import React from 'react'

import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { ReactComponent as CheckEmailSVG } from '../../../assets/img/checkEmail.svg'

const CheckEmail = () => {
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
            Check Email
          </Typography>
          <CheckEmailSVG />
          <Typography component="p" sx={{ mt: 2, opacity: 0.5, textAlign: 'center' }}>
            We’ve sent an Email with instructions to example@mail.com
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
      </Paper>
    </Container>
  )
}

export default CheckEmail
