import bgImg from '../assets/hero-bg.jpg';
import pizza from '../assets/home-banner-pizza.webp';
const HomeBanner = () => {
    
    return (
<div className="w-full bg-center bg-cover  p-2 flex justify-center items-center " style={{backgroundImage: `url(${bgImg})`}}>

<div className='flex lg:flex-row flex-col justify-center items-center lg:gap-36'>

<div className='flex flex-col  gap-3 max-w-2xl'>
    <h1 className='lg:text-5xl md:text-5xl text-4xl lg:text-start text-center text-lime-200 font-black '>Supper delicious <br /> pizza in town!</h1>
    <p className='lg:text-2xl md:text-xl text-base text-balance lg:text-start text-center  text-lime-50 font-medium'>Something you definitely have never tasted before Come and try our delicious pizzas!</p>
   <div className='flex justify-center lg:justify-start'>
   <button className=' w-32 bg-lime-500 px-3 py-2  text-black transform rounded-md  lg:hover:bg-white transition-all duration-500 font-semibold text-base hover:scale-110 scale-100'>Book A Table</button>
   </div>
</div>

<div className='pb-8 w-full flex justify-center items-center' >
    <img className='xl:h-[30rem] lg:h-[16rem] md:h-[25rem]' src={pizza} alt="" />
</div>

</div>

</div>

    );
};

export default HomeBanner