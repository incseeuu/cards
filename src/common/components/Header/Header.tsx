import React from 'react'

import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from '../../../assets/img/logo.svg'

import s from './Header.module.scss'

export const Header = () => {
  const navigation = useNavigate()

  return (
    <div className={s.container}>
      <Logo />
      <Button
        variant="contained"
        style={{ borderRadius: '30px', height: '36px' }}
        onClick={() => navigation('/login')}
      >
        Sign in
      </Button>
    </div>
  )
}
