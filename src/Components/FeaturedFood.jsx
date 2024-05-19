// eslint-disable-next-line react/prop-types
const FeaturedFood = ({items}) => {
    const {name, image, quantity} = items || {};
    return (
<div className="max-w-full rounded-xl shadow bg-white space-y-3 h-80 ">

<div className="p-2">
<h1 className="bg-red-600 mb-5 rounded-md  w-24 text-center text-xl font-medium text-white">Stock: {quantity}</h1>
<h1 className="text-2xl text-center font-semibold uppercase">{name}</h1>
</div>

<p className="relative bottom-32">
<div className="flex justify-center items-center">
<img className="h-56 relative top-28" src={image}  />
</div>

<div className="bg-lime-600 h-32 rounded-b-xl "></div>
</p>
</div>
    );
};

export default FeaturedFood;