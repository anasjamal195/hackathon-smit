import React from 'react'
import db from "../../firebase";
import { useState,useEffect } from "react";
import { collection,getDocs } from "@firebase/firestore";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import classes from './HomepageStyle'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Icon';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Homepage() {
const [Products, setProducts] = useState([]);
const collectionRef = collection(db,"products")
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);


useEffect(() => {
  const getUsers = async () => {
  const data = await getDocs(collectionRef)
  setProducts(data.docs.map((docs)=>({...docs.data(),id:docs.id})));
  console.log(Products)
  }
  getUsers();



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


      <div style = {classes.cards}>
      {Products.map((product) =>{
        return <div>
          
          <Card style = {classes.card} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
       
         <Typography variant="h6" color="text.secondary">
         Price: Rs {product.price} \-       
         </Typography>
         <Typography variant="h6" color="text.secondary">
         {product.description}        
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Catagory:  {product.catagory}       
         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Add to cart</Button>
        
      </CardActions>
    </Card>
        </div>
      })}
      </div>
    </div>
  )
}
