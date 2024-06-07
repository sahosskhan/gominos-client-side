import { useLoaderData } from "react-router-dom";


const SingleFoodPage = () => {
    const items = useLoaderData();
    const {_id, name, image, category, price, details, origin, quantity, user, } = items || {};

    return (
        <div>
            <h1>{name}</h1>
            
        </div>
    );
};

export default SingleFoodPage;