import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CryptoJS from 'crypto-js';

const Login = () => {
    const navigate = useNavigate();
    const UserData = useLoaderData();
    const secretKey = import.meta.env.VITE_SECRET_KEY;

    const HandelUserData = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const tempEmail = email; 
        const tempPassword = password;

        const hashedEmail = CryptoJS.AES.encrypt(email, secretKey).toString();
        const hashedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
        const expirationTime = Date.now() + 3600 * 1000; // 1 hour expiration
    
        const data = {
          email: hashedEmail,
          password: hashedPassword,
          expiration: expirationTime,
        };
    
        sessionStorage.setItem('userData', JSON.stringify(data));

        const emailFilter = UserData.map(user => user.email);
        const passwordFilter = UserData.map(user => user.password);



        if (emailFilter.includes(tempEmail) && passwordFilter.includes(tempPassword)) {
            Swal.fire({
                title: "Successfully!",
                text: "You have logged in your account",
                icon: "success",
                timer: 3000,
                showConfirmButton: false,
              });
              navigate("/")
        } 
        if (!emailFilter.includes(tempEmail) || !passwordFilter.includes(tempPassword)){
            Swal.fire({
                title: "Error!",
                text: "Email or Password is incorrect",
                icon: "error",
                timer: 1000,
                showConfirmButton: false,
              });
        }






          
    }
    return (
        <div className="max-w-screen-sm bg-lime-200 p-10 mt-10 container mx-auto">
<div className="text-sm breadcrumbs mb-4 flex justify-center">
  <ul>
    <li><a href="/">Home</a></li> 
    <li><a href="/register-account">Create An Account</a></li> 
    <li><a href="/login-account">Login An Account</a></li> 
  </ul>
</div>
        <h2 className="text-3xl text-center font-bold mb-6">Login An Account</h2>
        <form onSubmit={HandelUserData} >
          <div className="flex flex-col space-y-4 mb-4">
            
            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email Address" name="email" type="email" />
            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Password" name="password" type="password" />
     
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-md text-lg uppercase font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
            Login
          </button>
        </form>
      </div>
    );
};

export default Login;