

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import NewOrder from './NewOrder'
import UpdateOrder from './UpdateOrder'

/* Format Date Cells */
const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const updatedata =    {displayOrderId: "",awbNo: "",logisticName:""}
const lastOrder = { mobileNo: "", productName: "", couponCode: "" }
const GridExample = () => {
  const [rowData, setRowData] = useState([]);
  const [formData, SetFormData] = useState(lastOrder); //place order form 
  const [updateOrderForm, SetUpdateOrderForm] = useState(updatedata); //update order form 
  const [open, SetOpen] = useState(false); //open place order 

  const handleOpen = () => {
    SetOpen(true) //open place order 
  }
  const handleClose = () => {
    SetOpen(false) //close place order 
  }

  const [colDefs] = useState([
    { headerName: 'display_OrderId', field: 'displayOrderId' },
    { headerName: 'customer_Name', field: 'customerName' },
    { headerName: 'product_Name', field: 'productName' },
    { headerName: 'customer_Name', field: 'customerName'},
    { headerName: 'mobile_No', field: 'mobileNo'},
    { headerName: 'model_No', field: 'modelNo' },
    //{headerName:'Product_Color', field: 'ProductColor' },
    { headerName: 'category', field: 'category' },
    { headerName: 'sub_Category', field: 'subCategory' },
    { headerName: 'discription', field: 'discription' },
    { headerName: 'order_Date', field: 'orderDate' },
    { headerName: 'expected_Delivery_Date', field: 'expectedDeliveryDate'},
    { headerName: 'logistic_Name', field: 'logisticName' },
    { headerName: 'awbNo', field: 'awbNo' },
    { headerName: 'coupon_Code', field: 'couponCode' },
    { headerName: "Action", field: "displayOrderId",

      cellRenderer: (params) => <div>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => handleUpdateOrderForm(params.value)}><EditIcon /></Button>
          <Button variant="contained"  onClick={() => deletehandler(params.value)}><DeleteForeverIcon /></Button>
        </Stack>
      </div>
    }
  ]);

  //*************************get order details********************************* 
  const getOrders = async () => {
    const result = await axios.get('http://localhost:8080/getcustomerorders')
    console.log(result.data);
    setRowData(result.data);
  };

  useEffect(() => {
    getOrders();
  }, []);
  //*************************place order********************************* 
  const onChange = (e) => {     //order place check on console
    const { value, id } = e.target
    SetFormData({ ...formData, [id]: value })
  }
  const handleOrderPlaceForm = () => {
    axios.post('http://localhost:8080/placeorder', formData)
      .then(resp => {
        handleClose()
        getOrders()
        SetFormData(lastOrder); // clear last order in place order form
        //alert("your order succussfully placed");
      });
  }

  //*************************Update order********************************* 
  const handleUpdateOrderForm = async (e) => {
  //   e.preventDefault();
  //   const result =await axios.put(`http://localhost:8080/updateorderdetails/${displayOrderId}`)
  //   SetUpdateOrderForm(result.data);
  //   handleOpen()
  //   getOrders();
  };

  //*************************delete order********************************* 
  const deletehandler = async (displayOrderId) => {
    await axios.delete(`http://localhost:8080/deleteorder/${displayOrderId}`)
    getOrders();
  }
  //********************************************************* 
  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true,
  }), []);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={{marginRight:'100px', marginLeft:'300px'}}>
      <div className={"ag-theme-quartz"} style={{ width: '1000px', height: '500px', margin: '10px', padding: '1px' }} >
        <Grid align='right'>
          <Button variant="contained" onClick={handleOpen}> Place Order</Button>
        </Grid>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          rowSelection="multiple"
        />
      </div>
      <NewOrder open={open} handleClose={handleClose} data={formData} onChange={onChange} handleOrderPlaceForm={handleOrderPlaceForm} />
      <UpdateOrder open={open} handleClose={handleClose} updateOrder={updateOrderForm} onChange={onChange} handleUpdateOrderForm={handleUpdateOrderForm} />

    </div>
  );
};
export default GridExample