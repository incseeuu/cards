import React, { useState } from 'react'

import { Paper } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { ReactComponent as Arrow } from '../../assets/img/arrowBack.svg'
import { ReactComponent as EditName } from '../../assets/img/Edit.svg'
import { ReactComponent as Logout } from '../../assets/img/logout.svg'
import { ReactComponent as ChangeAvatarIcon } from '../../assets/img/Union.svg'

import classes from './Profile.module.css'

const Profile = () => {
  const [editable, setEditable] = useState(false)

  const onClickChangeNickHandler = () => {
    setEditable(true)
  }

  const onClickSaveNewNicknameHandler = () => {
    setEditable(false)
  }

  return (
    <div>
      <h4>
        <Arrow />
        Back to Packs List
      </h4>
      <Container component="main" maxWidth="xs" sx={{ mt: 12 }}>
        <CssBaseline />
        <Paper elevation={2} style={{ padding: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Personal Information
            </Typography>
            <div className={classes.avatarContainer}>
              <img
                className={classes.avatar}
                src={
                  'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
                }
                alt={'image'}
              />
              <div className={classes.avatarChangeIconBg}>
                <ChangeAvatarIcon className={classes.avatarChangeIcon} />
              </div>
            </div>
            <div className={classes.personalData}>
              {!editable ? (
                <span className={classes.name}>
                  Creep
                  <EditName className={classes.changeNameIcon} onClick={onClickChangeNickHandler} />
                </span>
              ) : (
                <div className={classes.editableSpan}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Nickname"
                    autoFocus
                    variant={'standard'}
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onClickSaveNewNicknameHandler}
                  >
                    SAVE
                  </Button>
                </div>
              )}
              <span className={classes.email}>creepmechniq@gmail.com</span>
            </div>
            <Button className={classes.logoutBtn} variant="contained" sx={{ mt: 3, mb: 2 }}>
              <Logout />
              Log Out
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default Profile
