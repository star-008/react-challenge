import { Avatar, Button, Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: '#193e60',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  link: {
    color: 'white',
    padding: theme.spacing(1, 1.5),
    borderRadius: '20px',
  },
  activeLink: {
    backgroundColor: '#ffce50',
    color: '#193e60',
    padding: theme.spacing(1, 1.5),
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: '#ffce50',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}))

function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={4}>
            <Avatar src="avatar.png" />
          </Grid>
          <Grid item md={4}>
            <Button className={classes.link}>Home</Button>
            <Button className={classes.link}>Product</Button>
            <Button className={classes.link}>About</Button>
            <Button className={classes.link}>Pricing</Button>
            <Button className={classes.link}>Blog</Button>
            <Button className={classes.link}>Contact</Button>
            <Button className={classes.activeLink}>Account</Button>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
