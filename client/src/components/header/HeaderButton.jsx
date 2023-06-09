import {useContext, useState} from 'react';
import { Box , Button, makeStyles, Typography, Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';

import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex'
    },
    wrapper: {
        margin: '0 7% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center'      
        }   
    },
    login: {
        color: '#000000',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none' 
    }
}));

const HeaderButton = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);

    const openLoginDialog = () => {
        setOpen(true)
    }

  return (
      <Box className={classes.wrapper}>
         { 
          account ? <Profile account={account} setAccount={setAccount}/>  :
           <Link>
            <Button 
                variant='contained'
                className={classes.login}
                onClick={() => openLoginDialog()}
            >
                Login
            </Button>
          </Link>
         }
            <Link><Typography style={{ marginTop: 2 }}>More</Typography></Link>
          <Link to='/cart' className={classes.container}>
            <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
            </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
          </Link>
          <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
      </Box>
  );
};

export default HeaderButton;
