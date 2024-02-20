import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export default function UpdateOrder({open, handleClose, updateOrder, onChange,handleOrderPlaceForm}) {
    const{displayOrderId, awbNo, logisticName} = updateOrder

    return (
        <Dialog
            // open={open}
            // onClose={handleClose}
        >
            <DialogTitle >Edit order</DialogTitle>
            <DialogContent>
                <form>
                    <TextField id="displayOrderId" value = {displayOrderId}  onChange = {e=>onChange(e)}  placeholder="Enter  displayOrder Id" lable="mobile_No" variant='outlined' margin='dense' fullWidth />
                    <TextField id="awbNo" value ={awbNo}   onChange = {e=>onChange(e)} placeholder="Enter  awbNo" lable="product_Name" variant='outlined' margin='dense' fullWidth />
                    <TextField id="logisticName" value ={logisticName}  onChange = {e=>onChange(e)} placeholder="Enter logisticName" lable="coupon_Code" variant='outlined' margin='dense' fullWidth />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant='outlined' >cancal</Button>
                <Button color="primary" variant='contained' onClick={()=>handleOrderPlaceForm()}>Submit</Button>
                </DialogActions>
        </Dialog>

    );
}
