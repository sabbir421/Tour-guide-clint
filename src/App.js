


import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/log-in/Login';
import PrivetRout from './Components/PrivetRout/PrivetRout';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/Service-Details/ServiceDetails';
import NotFound from './Components/NotFound/NotFound';


import AuthProvider from './Contexts/Context';
import AddService from './Components/AddService/AddService';
import Myorder from './Components/MyOrder/Myorder';
import AllOrder from './Components/AllOrder/AllOrder';


function App() {
  return (
    <div className="">
       <AuthProvider>
       <BrowserRouter>
       <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivetRout path='/details/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivetRout>
          <Route path='/addService'>
            <AddService></AddService>
          </Route>
          <PrivetRout path='/myOrder'>
            <Myorder></Myorder>
          </PrivetRout>
          <PrivetRout path='/allOrder'>
            <AllOrder></AllOrder>
          </PrivetRout>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/registation'>
           <Register></Register>
          </Route>
          <Route  path='*'>
           <NotFound></NotFound>
          </Route>
         
        </Switch>
        <Footer></Footer>
       </BrowserRouter>
       </AuthProvider>
        
    </div>
  );
}

export default App;
