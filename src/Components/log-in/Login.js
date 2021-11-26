

import {useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../log-in/Login.css'


const Login = () => {
  const {signInUsingGoogle}=useAuth();
  const location = useLocation();
  const location_url = location.state?.from || "/";
  const history = useHistory();

const GmailLoginFunction=(e)=>{
  e.preventDefault()
  signInUsingGoogle()
  history.push(location_url);

}


    return (
        <div className='login-form  w-50 mx-auto my-2'>
            <h2 className='text-white d-flex justify-content-center'>Please Login</h2>
            <div>
             
      
            </div>
            <button onClick={GmailLoginFunction} className="googleBtn rounded mb-2 btn-white border-0 text-dark p-2">Google Sign In</button>
        </div>
    );
};

export default Login;