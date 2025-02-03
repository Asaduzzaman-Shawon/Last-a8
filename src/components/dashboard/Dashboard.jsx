import React from 'react';
import { GiSelfLove } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
 
const Dashboard = () => {
 
    return (
       
      <div>
           <div className="bg-[#9538e2] pt-6 pb-6 w-full  flex flex-col mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4  text-white">
          Dashboard
          </h1>
          <p className="text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p><br />
           <Link to="cart"><button  className="btn bg-white rounded-xl mr-3 text-[#9538e2]"> Cart <FaShoppingCart></FaShoppingCart></button></Link>
                    <Link to="wishlist"><button  className="btn text-white btn-outline border-white btn-primary rounded-full">Wishlist <GiSelfLove></GiSelfLove></button></Link>
        </div>
        
      </div>
      <div>
        {/* call */}
       
        <Outlet></Outlet>
        </div>  
        
      </div>
    );
};

export default Dashboard;