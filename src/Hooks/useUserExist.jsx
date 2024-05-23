import CryptoJS from 'crypto-js';
import useUser from "../Hooks/useUser";
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const secretKey = import.meta.env.VITE_SECRET_KEY;

const useUserExist = () => {
  
    const [storedEmail, setStoredEmail] = useState('');
    const [storedPassword, setStoredPassword] = useState('');
const [AllUserData, refetch] = useUser([]);

const FilterUserList = AllUserData.filter(item => item.email === storedEmail && item.password === storedPassword);
const emailFilter = FilterUserList.map(user => user.email).join(', ');
const passwordFilter = FilterUserList.map(user => user.password).join(', ');
const phoneFilter = FilterUserList.map(user => user.phone).join(', ');
const addressFilter = FilterUserList.map(user => user.address).join(', ');
const nameFilter = FilterUserList.map(user => user.name).join(', ');
const imageFilter = FilterUserList.map(user => user.image).join(', ');

useEffect(() => {
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      const { email, password, expiration } = JSON.parse(storedData);

      if (Date.now() > expiration) {
        alert('Session expired');
        sessionStorage.removeItem('userData');
      } else {
        const bytesEmail = CryptoJS.AES.decrypt(email, secretKey);
        const originalEmail = bytesEmail.toString(CryptoJS.enc.Utf8);

        const bytesPassword = CryptoJS.AES.decrypt(password, secretKey);
        const originalPassword = bytesPassword.toString(CryptoJS.enc.Utf8);

        setStoredEmail(originalEmail);
        setStoredPassword(originalPassword);
      }
    }
  }, []);
 
  const handleLogout = () => {
    sessionStorage.removeItem('userData');

    // Show the alert immediately
    Swal.fire({
        title: 'Logged Out',
        text: 'You have been successfully logged out.',
        icon: 'success',
        timer: 1000, // Automatically close the alert after 1 second
        showConfirmButton: false
    });

    // Reload the page after 1 second
    setTimeout(() => {
        window.location.reload();
    }, 500);
}


return {emailFilter, passwordFilter, phoneFilter, addressFilter, nameFilter, imageFilter, handleLogout}





};

export default useUserExist;