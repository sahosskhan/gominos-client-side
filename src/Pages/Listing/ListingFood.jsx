import { Link, useLoaderData } from "react-router-dom";
import useUserExist from "../../Hooks/useUserExist";


const ListingFood = () => {
    const AllFoodData = useLoaderData();
    const {emailFilter} = useUserExist({});
    const userFood = AllFoodData.filter(food =>food?.email === emailFilter) ;
    return (
        <>
          <div className="overflow-x-auto  ">
    <table className="shadow-md max-w-screen-2xl container mx-auto  mt-6 ">
        <thead>
            <tr className="bg-amber-600 text-xl text-white">
            <th className="py-4 px-6  text-left border-b">#</th>
                <th className="py-4 px-6  text-left border-b">Name</th>
                <th className="py-4 px-6  text-left border-b">Category</th>
                <th className="py-4 px-6  text-left border-b">Stock</th>
                <th className="py-4 px-6  text-left border-b">Discount</th>
                <th className="py-4 px-6  text-left border-b">Order</th>
                <th className="py-4 px-6  text-left border-b">Price</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
                <th className="py-4 px-6  border-b text-end">Action</th>
            </tr>
        </thead>

        <tbody>
        {
                          userFood?.map((item, index) =>
            <tr  key={item._id} className="hover:bg-amber-50  transition-all  border-b  duration-500">
                <td className="py-4 px-6 border-b text-2xl font-medium">{index + 1}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.name}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.category}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.stock}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.discount}</td>
                <td className="py-4 px-6 border-b text-2xl font-medium">{item.order}</td>
                <td className="py-4 px-6 border-b text-2xl   font-medium">${item.price}</td>
                <td className="py-4 px-2 border-b text-end">

              <Link to={`/dashboard/edit-items/`}>
              <button  className="bg-green-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md"><i className="fa-regular fa-pen-to-square"></i></button>
              </Link>
                    
                    </td>
                <td className="py-4 px-5 border-b text-end">
                    <button   className="bg-red-500 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 text-xl font-medium  rounded-md"><i className="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>)
}
        </tbody>
    </table>
</div>   
        </>
    );
};

export default ListingFood;