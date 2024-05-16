import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
              <nav className=" bg-lime-200">
            <div className=" px-6 py-4  container mx-auto max-w-screen-xl ">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                   <div className="text-xl font-bold uppercase text-black">
                  <span className="text-red-500"> <i className="fa-solid fa-dice"></i></span> Gomi<span className="text-red-500">nos</span>
                   </div>
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-black  hover:text-gray-600 d focus:outline-none focus:text-gray-600 "
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                      <i className=" text-black text-2xl fa-solid fa-pizza-slice"></i>
                                  
                                ) : (
                                    <i className="text-black text-2xl fa-solid fa-burger"></i>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-lime-200  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'}`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to="/" className="act-nav px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Home</Link>
                            <Link to="/our-menu" className="act-nav px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Our Menu</Link>
                            <Link  to="/daily-blog"  className="act-nav px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Daily Blog</Link>
                            <Link  to="/contact-us"  className="act-nav px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-50 font-semibold text-base ">Contact Us</Link>
                            <Link  to="/contact-us"  className="act-nav w-32 lg:bg-white px-3 py-2 mx-3 mt-2 text-black transform rounded-md lg:mt-0  lg:hover:bg-red-500 transition-all duration-500 font-semibold text-base hover:scale-110 scale-100">Book A Table</Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav> 
        </div>
    );
};

export default Navbar;