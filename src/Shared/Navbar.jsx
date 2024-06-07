import {useState } from "react";
import { Link } from "react-router-dom";
import useUserExist from "../Hooks/useUserExist";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const {imageFilter, handleLogout, emailFilter} = useUserExist({});



    return (
        <div>
              <nav className=" bg-lime-200">
            <div className=" px-6 py-4  container mx-auto max-w-screen-xl ">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                   <div className="text-xl font-bold uppercase text-gray-700">
                  <span className="text-red-600"> <i className="fa-solid fa-dice"></i></span> Gomi<span className="text-red-600">nos</span>
                   </div>
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-black  hover:text-gray-600 d focus:outline-none focus:text-gray-600 "
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                      <i className=" text-red-600 text-2xl fa-solid fa-pizza-slice"></i>
                                  
                                ) : (
                                    <i className="text-lime-600 text-2xl fa-solid fa-burger"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-lime-200  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'}`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to="/" className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Home</Link>
                            <Link to="/our-menu" className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Our Menu</Link>
                            <Link  to="/daily-blog"  className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Daily Blog</Link>
                            <Link  to="/contact-us"  className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Contact Us</Link>
                            <Link  to="/contact-us"  className="act-nav w-32 lg:bg-white px-3 py-2 mx-3 mt-2 text-gray-700  transform rounded-md lg:mt-0  lg:hover:bg-red-600 hover:text-black transition-all duration-500 font-semibold text-base hover:scale-110 scale-100">Book A Table</Link>
                            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn  btn-circle avatar">
        <div className="w-10 rounded-full">
            {
                imageFilter==""? (
                    <img alt="" src="avatar.png" />
                    
                ) : (
                    <img alt="" src={imageFilter} />
                )
            }
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu  dropdown-content bg-lime-200 rounded-box w-52">
        {
             emailFilter==""? <>
       <li className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a href="/register-account">Register</a></li>
        <li className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a href="/login-account">Login</a></li>
        </>
        :
        <>
        <li className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a>Profile</a></li>
        <li className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a href="/add-items">Add Items</a></li>
        <li className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a href="/my-listing-food">My Listing</a></li>
        <li onClick={handleLogout} className="act-nav px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base "><a>Logout</a></li>
        </>
        }
      


    
        
      </ul>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav> 
        </div>
    );
};

export default Navbar;