import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CreateProducts({onSave}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
   
  const resetDialogForm = () =>{
    setName("");
    setDescription("");
    setCategory("");
    setPrice("")
  }

  
  const handleSave = () => {
    const id = JSON.parse(localStorage.getItem("loggedInUser")).id
    let products = JSON.parse(localStorage.getItem('Products')) || [];
    let productData = { name, description, category, price, id }
    products.push(productData);

    setTimeout(() => {
      localStorage.setItem('Products', JSON.stringify(products));
  }, 2000);

    onSave(productData)
    resetDialogForm();
    setOpen(false);
  };


  return (
    <form className="createProductStyle">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Products
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Products
        </DialogTitle>
        <DialogContent dividers>
          <TextField  
            autoFocus
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            id="name"
            autoComplete="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField  
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
            autoComplete="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField  
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="category"
            label="Category"
            id="category"
            autoComplete="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <TextField  
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="price"
            label="Price"
            id="price"
            autoComplete="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
      </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} color="primary">
            Save products
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
