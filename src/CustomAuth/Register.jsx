import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const [showName, setShowName] = useState({});
    const navigate = useNavigate();
    const [showImagePreview, setShowImagePreview] = useState({});
    const fileInputRef = useRef();
    const handleClearFile = () => {
      setShowName('');
      setShowImagePreview('');
      fileInputRef.current.value = '';
    };
    const [imageFile, setImageFile] = useState([]); 
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImageFile(file)
      setShowName(file);
      setShowImagePreview(URL.createObjectURL(file));
  }
    const HandelUserData = (event) => {
        event.preventDefault();
        const from = event.target;

        const images = imageFile;
        const formData = new FormData();
        formData.append('image', images);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBBAPI}`;


        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then((res) => res.json())
        .then((imageData) => {
            if (imageData.success) {
                const image = imageData?.data?.url;


        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const phone = from.phone.value;
        const address = from.address.value;


const UserData = { name, email, password, phone, address, image };
console.log(UserData);

from.name.value = "";
from.email.value = "";
from.password.value = "";
from.phone.value = "";
from.address.value = "";




fetch(
  "http://localhost:5000/user-data-send",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(UserData),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.insertedId) {
      Swal.fire({
        title: "Successfully!",
        text: "Account has been created ",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      navigate("/login-account")
    }
  });







        }
    
        
      })
    
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
    <h2 className="text-3xl text-center font-bold mb-6">Create An Account</h2>
    <form onSubmit={HandelUserData}>
      <div className="flex flex-col space-y-4 mb-4">
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Full Name" name="name" type="text" />
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email Address" name="email" type="email" />
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Password" name="password" type="password" />
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Phone Number" name="phone" type="text" />
        <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Present Address" name="address" type="text" />
        <div className="  my-10 ">
      {showName?.name ? (
        <div className=" mx-auto flex max-w-[600px] items-center gap-x-6  rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white">
          <img className="size-[100px] h-[100px] w-full max-w-[150px] rounded-lg object-cover" src={showImagePreview} alt={showName?.name} />
          <div className="flex-1 space-y-1.5 overflow-hidden">
            <h5 className=" text-xl font-medium tracking-tight truncate">{showName?.name}</h5>
            <p className=" text-gray-500">{(showName.size / 1024).toFixed(1)} KB</p>
          </div>
          <div onClick={handleClearFile}>
          <i className="text-4xl fa-solid fa-trash-can"></i>
          </div>
        </div>
      ) : (
        <label className=" mx-auto flex max-w-[600px] flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white" htmlFor="file5">
      <i className="text-4xl fa-solid fa-upload"></i>
          <div className="space-y-1.5 text-center">
            <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload your profile</h5>
            <p className="text-sm text-gray-500">File Should be in PNG, JPEG or JPG format</p>
          </div>
        </label>
      )}

<input
                  
                  name="photoURL"
                   ref={fileInputRef}
                   onChange={handleImageChange} 
                   className="hidden"
                   id="file5"
                   type="file"
                 />
    </div>
      </div>
      <button type="submit" className="inline-flex items-center justify-center rounded-md text-lg uppercase font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
        Create
      </button>
    </form>
  </div>


    );
};

export default Register;