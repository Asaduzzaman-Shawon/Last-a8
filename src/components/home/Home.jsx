import bannerImg from "../../assets/banner.jpg";
import Gadgets from "./gadgets/Gadgets";
const Home = () => {
  return (
    <div className="">
      <div className="hero   pt-10 md:pb-82 bg-[#9538e2]">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-4xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to  the next level. From smart devices to the <br /> coolest accessories, we have it all!
            </p>
            <button className="btn text-[#9538e2] rounded-3xl font-bold ">Shop Now</button>
          </div>
        </div>
      </div>
      <div className=" md:mt-[-280px] flex mx-auto relative md:w-[1040px] border rounded-xl border-gray-300 p-8">
        <img className="md:w-[990px] md:h-[500px]" src={bannerImg} alt="" />
      </div>
      
        <h1 className="text-2xl md:text-4xl mt-18 mb-14 text-black font-bold items-center justify-center flex ">Explore Cutting-Edge Gadgets</h1>
       <Gadgets></Gadgets>
    </div>
  );
};

export default Home;
