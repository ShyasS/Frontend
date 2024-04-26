/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import OrdersHistory from 'pages/order/OrderHistory';
import UsersList from 'pages/user/UserList';
import RestaurantTable from './pages/restaurant/Restaurant';
import UpdateMenu from 'pages/menu/UpdateSingleMenu';
import MenuList from 'pages/menu/MenuList';
import Payment from './pages/payment/Payment';
import Footer from './layout/Footer';
import Header from './layout/Header';
import HomePage from './pages/home/home';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/auth/login/login';
import SendLoginOtp from './pages/auth/login/SendLoginOtp';
import LoginWithOtp from './pages/auth/login/loginWithOtp';
import DashboardPage from './pages/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ResetPassword from './pages/auth/resetPassword/resetPassword';
import ForgotPasswordPage from './pages/auth/forgotPassword';
import ConfirmOrder from './pages/order/ConfirmOrder';
import OrderSuccess from './pages/order/OrderSuccess';
import OrderDetails from './pages/order/OrderDetails';
import OrderStatus from './pages/order/OrderStatus';
import OrdersTable from './pages/order/ActiveOrderList';
import CreateMenu from './pages/menu/CreateMenu';
import Profile from './pages/user/Profile';
import SignUpForm from './pages/auth/register/Signup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Home from 'pages/home/mainHome';
import CreateRestaurant from 'pages/restaurant/CreateRestaurant';
import EditRestaurant from 'pages/restaurant/UpdateRestaurant';
import CreateAdmin from 'pages/admin/CreateAdmin';
import CarouselForm from 'pages/carousal/CreateCarousal';
import CarousalTable from 'pages/carousal/ListCarousal';
import UpdateCarousal from 'pages/carousal/UpdateCarousal';
import ShippingInfo1 from 'pages/order/shippingInfo/ShippingInfo';
import RegistrationSuccess from 'pages/auth/register/RegistrationSuccess';
import LocationComponent from 'pages/location/Location';
import UpdateProfile from 'pages/user/UpdateProfile';
import CustomerList from 'pages/user/CustomerList';
import Cart from './pages/order/cart';
import Landing from 'pages/home/LandingPage/Home';
import OrdersTable1 from 'pages/order/UserOrderList';

function App() {
  const loggedIn = window.localStorage.getItem('isloggedIn'  || null);
  const [stripeApiKey, setStripeApiKey] = useState('');
  useEffect(() => {
    async function getStripeApiKey() {
      try {
        const { data } = await axios.get('/api/stripeapi');
        setStripeApiKey(data.stripeApiKey);
      } catch (error) {
        console.log(error)
      }
    }

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <div className="App bg-dark">
        <HelmetProvider>
          <div className="header">
              <Header />
          </div>
            <Routes>
              <Route element={loggedIn ? <HomePage /> : <LoginPage />} />
              <Route path="/select" element={<HomePage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login/otp" element={<SendLoginOtp />} />
              <Route path="/loginWithOtp" element={<LoginWithOtp />} />
              <Route path="/signup" element={<SignUpForm />} />
              < Route path="/" element={<Landing />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/password/forgot" element={<ForgotPasswordPage />} />
              <Route path="/api/verify-email/:token" element={<RegistrationSuccess />} />
              <Route path="/shippingInfo" element={<ShippingInfo1 />} />
              <Route path="/api/password/reset/:token" element={<ResetPassword />} />
              <Route path="/location" element={<LocationComponent/>} />
              <Route path="/userOrderList" element={<OrdersTable1/>} />
              <Route path="/order/confirm" element={                  
                <ConfirmOrder />
              }
              />
              <Route
                path="/order/success"
                element={
        
                  <OrderSuccess />
              
                }
              />
              <Route
                path="/order/:id"
                element={
        
                  <OrderDetails />
              
                }
              />
              <Route
                path="/myProfile/:id"
                element={
        
                  <Profile />
              
                }
              />
              <Route
                path="/updateProfile/:id"
                element={
                  
                  <UpdateProfile />
              
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  
                  <DashboardPage />
              
                }
              />
              <Route
                path="/admin/orderHistory"
                element={
                  
                  <OrdersHistory />
              
                }
              />
              <Route
                path="/admin/orders"
                element={
                  
                  <OrdersTable />
              
                }
              />
              <Route
                path="/admin/order/:id"
                element={
                  
                  <OrderStatus />
              
                }
              />
              <Route
                path="/admin/carousel/new"
                element={
                  
                  <CarouselForm />
            
                }
              />
               <Route
                path="/admin/carousel/list"
                element={
                  
                  <CarousalTable />
              
                }
              />
              <Route
                path="/admin/create"
                element={
                  
                  <CreateAdmin />
              
                }
              />
              <Route
                path="/admin/updateCarousal/:id"
                element={
                  
                  <UpdateCarousal />
              
                }
              />
              <Route
                path="/admin/create/restaurant"
                element={
        
                  <CreateRestaurant />
              
                }
              />
              <Route
                path="/admin/updateMenu/:id"
                element={
        
                  <UpdateMenu />
              
                }
              />
              <Route
                path="/admin/updateRestaurant/:id"
                element={
        
                  <EditRestaurant />
              
                }
              />
              <Route
                path="/admin/users"
                element={
                  
                  <UsersList />
              
                }
              />
              <Route
                path="/admin/menus"
                element={
                  
                  <MenuList />
              
                }
              />
              <Route
                path="/admin/createMenu"
                element={
                  
                  <CreateMenu />
              
                }
              />
              <Route
                path="/admin/customer/list"
                element={
                  
                  <CustomerList />
              
                }
              />
              <Route
                path="/admin/restaurants"
                element={
                  
                  <RestaurantTable />
              
                }
              />
              {stripeApiKey && (
                <Route
                  path="/payment"
                  element={
                    <Elements stripe={loadStripe(stripeApiKey)}>
                      <Payment />
                    </Elements>
                  }
                />
              )}
            </Routes>
           <Footer /> 
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;