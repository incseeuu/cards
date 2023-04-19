import React, { useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, InputLabel, Input, FormControl } from '@mui/material'
import { UseFormRegisterReturn } from 'react-hook-form'

type PasswordInputProps = {
  label: string
  register: UseFormRegisterReturn<'password' | 'confirmPassword'>
}

const PasswordInput = ({ register, label }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
        fullWidth
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...register}
      />
    </FormControl>
  )
}

export default PasswordInput
