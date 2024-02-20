import { React } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Routes, Route } from "react-router-dom";
import ReadOrderByMobNo from './omsOrder/ReadOrderByMobNo';
import ReadOrderList from './omsOrder/ReadOrderList';
import PlaceOrder from './omsOrder/PlaceOrder';
import UpdateOrder from './omsOrder/UpdateOrder';
import MyNavbar from './omsOrder/MyNavbar'
import ReadComplaintMob from './omsOrder/ReadComplaintMob';
import UpdateComplaint from './omsOrder/UpdateComplaint';
import ReadCustomerMobNo from './omsOrder/omsCustomer/ReadCustomerMobNo';
import ReadCustomerList from './omsOrder/omsCustomer/ReadCustomerList';
import UpdateCustomer from './omsOrder/omsCustomer/UpdateCustomer';
function App() {
  return (
    <div style={{ background: "white" }} >
      <MyNavbar />
      <Routes>
        <Route exact path="/order" element={<ReadOrderList />} />
        <Route exact path="order/:mobileNo" element={<ReadOrderByMobNo />} />
        <Route exact path="/placeorder" element={<PlaceOrder />} />
        <Route exact path="/updateorder/:displayOrderId" element={<UpdateOrder />} />
        <Route exact path="/complaint/:mobileNo" element={<ReadComplaintMob />} />
        <Route exact path="/updatecomplaint" element={<UpdateComplaint />} />

        <Route exact path="/customer" element={<ReadCustomerList />} />
        <Route exact path="/customer/:mobileNo" element={<ReadCustomerMobNo />} />
    

      </Routes>
      
    </div>
  );
}
export default App;

