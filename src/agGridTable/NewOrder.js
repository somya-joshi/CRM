import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export default function NewOrder({ open, handleClose,data,onChange,handleOrderPlaceForm}) {
    const{mobileNo, productName, couponCode} = data

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">Place order</DialogTitle>
            <DialogContent>
                <form>
                    <TextField id="mobileNo" value = {mobileNo}  onChange = {e=>onChange(e)}  placeholder="Enter Mobile No" lable="mobile_No" variant='outlined' margin='dense' fullWidth />
                    <TextField id="productName" value ={productName}   onChange = {e=>onChange(e)} placeholder="Enter Product Name" lable="product_Name" variant='outlined' margin='dense' fullWidth />
                    <TextField id="couponCode" value ={couponCode}  onChange = {e=>onChange(e)} placeholder="Enter Coupon Code" lable="coupon_Code" variant='outlined' margin='dense' fullWidth />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant='outlined' >cancal</Button>
                <Button color="primary" variant='contained' onClick={()=>handleOrderPlaceForm()}>Submit</Button>
                </DialogActions>
        </Dialog>

    );
}
