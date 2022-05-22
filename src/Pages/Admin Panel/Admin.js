import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import db from "../../firebase";
import { useState,useEffect } from "react";
import { collection,getDocs } from "@firebase/firestore";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Admin = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const collectionRef = collection(db,'users')
  const [users, setUsers] = useState([]);


  useEffect(() => {
     const getUsers = async () =>{
         const data  = await getDocs(collectionRef)
         setUsers(data.docs.map((docs)=>({...docs.data(),id:docs.id})));
     }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

                <Grid container >
                    <Grid item sm = {6} md = {6} >
                    {users.map((user) =>{
        return<div>
                <Typography variant = 'h6'>
                    Name: {user.name}
                </Typography>
                <Typography variant = 'h6'>
                    Email: {user.email}
                </Typography>
                <Typography variant = 'h6'>
                    Password: {user.Password}
                </Typography>
                <Typography variant = 'h6'>
                    Ciy: {user.city}
                </Typography>
                <Typography variant = 'h6'>
                    Country: {user.country}
                </Typography>
                <Typography variant = 'h6'>
                    State: {user.state}
                </Typography>
                <Typography variant = 'h6'>
                    Postal Code: {user.post_code}
                </Typography>
                <Typography variant = 'h6'>
                    Mobile No: {user.mobile_no}
                </Typography>
                
                
                
                </div>
                    })}
                    </Grid>
                    <Grid item sm = {6} md = {6} >
                        Products
                    </Grid>
                    
                </Grid>









    </div>



  );
};
export default Admin;