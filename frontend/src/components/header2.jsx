import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <a href="/"><ListItem button >
      <ListItemIcon><HomeIcon/> </ListItemIcon>
            <ListItemText  primary="Página inicial" style={{color: "#022235"}}/></ListItem></a>
            <a href="/contato"><ListItem button >
      <ListItemIcon><RecentActorsIcon/> </ListItemIcon>
            <ListItemText  primary="Contato" style={{color: "#022235"}}/></ListItem></a>
      <a href="/"><ListItem button >
      <ListItemIcon><InfoIcon/> </ListItemIcon>
            <ListItemText  primary="Quem somos nós" style={{color: "#022235"}}/></ListItem></a>
          
        
      </List>
      <Divider />
     

    </div>
  );

  return (
    <div style={{backgroundColor:"pink"}}>
      {['left', ].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
          <AppBar position="sticky">
         <div>
         <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          
        
          <div className={classes.grow} />
          <div className="iconsheaderMobile">
          
            
            <a href="/login" style={{color: "#fff"}}><IconButton
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
            
              color="inherit"
            >
              <AccountCircle />
            </IconButton></a>
          </div>
          <div className={classes.sectionMobile}>
            
          </div>
        </Toolbar>
        </div>
      </AppBar>
        </React.Fragment>
      ))}
    </div>
  );
}