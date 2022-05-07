import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Hooks/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Supplier from './Pages/AddSupplier/AddSupplier';
import AllSuppliers from './Pages/AllSuppliers/AllSuppliers';
import UpdateSupplier from './Pages/AllSuppliers/UpdateSupplier/UpdateSupplier';
import MySuppliers from './Pages/MySuppliers/MySuppliers';
import DeliverSup from './Pages/DeliverSup/DeliverSup';
import Blogs from './Pages/Blogs/Blogs';
function App() {

  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/update/:id' element={<UpdateSupplier></UpdateSupplier>}></Route>
        <Route path='/deliver/:supplierId' element={<DeliverSup></DeliverSup>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>
        <Route path='/allsupplier' element={
          <RequireAuth>
            <AllSuppliers></AllSuppliers>
          </RequireAuth>}>
        </Route>
        <Route path='/addsupplier' element={
          <RequireAuth>
            <Supplier></Supplier>
          </RequireAuth>}>
        </Route>
        <Route path='/mysuppliers' element={
          <RequireAuth>
            <MySuppliers></MySuppliers>
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
