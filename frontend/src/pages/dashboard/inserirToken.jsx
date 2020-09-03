import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './dashboard.css'
const useStyles = makeStyles((theme) => ({
    button: {
        color: "#fff"
    },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(true);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button  onClick={handleToggle} className={classes.button} >
       <strong> INSERIR TOKEN MERCADO PAGO</strong>
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>

       <br/>
        <form>
        <button className="btn btn-danger" onClick={()=>setOpen(false)}>fechar</button>
        <br/>
        <label><strong>TOKEN MERCADO PAGO: </strong></label><br/>
        
        <input />
        <br/>
        <button className="btn btn-info" onClick={()=>setOpen(false)}>Enviar</button>
        <br/>
        <a>Como pegar o token Mercado Pago?</a>
        </form>
       
      </Backdrop>
    </div>
  );
}