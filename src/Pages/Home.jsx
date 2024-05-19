import { useLoaderData } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner";
import FeaturedFood from "../Components/FeaturedFood";

const Home = () => {
    const HomeFoodData = useLoaderData();
    return (
        <div className="bg-lime-50">
 <HomeBanner />
 <h1 className="text-center text-6xl text-gray-700 uppercase font-bold my-10">
          <span className="text-red-600">Top <span className="text-lime-600">Selling</span></span> Foods
        </h1>
 <div className="max-w-screen-xl container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 gap-x-16 gap-y-20">
          {HomeFoodData?.map((items) => (
            <FeaturedFood key={items._id} items={items}/>
          ))}
        </div>
        </div>
    );
};

export default Home;