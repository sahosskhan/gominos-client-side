import { useRef, useState } from "react";
import useUserExist from "../Hooks/useUserExist";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddFood = () => {
    const {emailFilter} = useUserExist({});
    const navigate = useNavigate();
    const [showName, setShowName] = useState({});
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


  const HandelItemsData = (event) => {
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
    const email = emailFilter;
    const category = from.category.value;
    const price = from.price.value;
    const discount = from.discount.value;
    const details = from.details.value;
    const stock = from.stock.value;


const ItemsData = { name, email, image, category, price, discount, details, stock };


from.name.value = "";
from.category.value = "";
from.price.value = "";
from.discount.value = "";
from.details.value = "";
from.stock.value = "";

fetch(
    "http://localhost:5000/add-food-data",
    {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ItemsData),
    }
    )
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    if (data.insertedId) {
      Swal.fire({
        title: "Successfully!",
        text: `${name} has been added`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      navigate("/")
    }
    });
        }
    
  })

}




    return (
        <div className="py-16 container mx-auto max-w-screen-lg">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-opacity-20 bg-lime-300 backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-600">
            Add Your Items For Menu
          </h1>

          <form onSubmit={HandelItemsData}  className="mt-6">
            {/* row1 */}
            <div className="flex lg:flex-row flex-col gap-5">
{/* item 1 */}
              <div className="from-control  flex-1 ">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
{/* item 2 */}
              <div className="from-control flex-1">
    <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
        Category
    </label>
    <select
        name="category"
        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
    >
        <option value="" disabled selected>Select Category</option>
        <option value="Pizza">Pizza</option>
        <option value="Burger">Burger</option>
        <option value="Fries">Fries</option>
        <option value="Chicken">Chicken</option>
        <option value="Drinks">Drinks</option>
    </select>
</div>

            </div>
{/* row2 */}
            <div className="flex lg:flex-row flex-col gap-5">
{/* item 3 */}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
              Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Enter Stock"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            
              </div>
{/* item 4 */}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                 Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

            </div>

{/* row3 */}
<div className="flex lg:flex-row flex-col gap-5">
{/* item 5 */}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
              Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  placeholder="Enter Discount"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            
              </div>
{/* item 6 */}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                 Email
                </label>
                <input
                  type="email"
                  name="email"
               defaultValue={emailFilter}
               readOnly
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

            </div>


{/* row4 */}
<div className="flex lg:flex-row flex-col gap-5">
{/* item 5 */}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Details
                </label>
                <textarea
                  name="details"
                  placeholder="Enter Details"
                  
                  className="block w-full h-28 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
            
              </div>


            </div>


{/* row5 */}


<div className="  mt-5 ">
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
            <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload items image</h5>
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









            <input
              className="btn btn-block mt-8 border-none text-xl uppercase font-semibold bg-red-600 text-white hover:bg-lime-600 transition-all duration-500"
              type="submit"
              value="Add Items"
            />
          </form>
        </div>
      </div>   
    );
};

export default AddFood;