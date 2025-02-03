import React, { useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
const Detail = ({handleAdd}) => {
  const data = useLoaderData();
  // const {product_id, roduct_title, product_image, category,price, description, Specification, availability, rating} = data
  const para = useParams();
 
  const num = parseInt(para.gadgetId);
  const gadget = data.find((gadget) => gadget.product_id === num);

  const {

    product_title,
    product_image,
    price,
    description,
    rating,
    
    availability,
  } = gadget;

  const sp = gadget.Specification
  const [gadgetNum , setGadgetNum] = useState(0)
  const handlehard = () => {
    setGadgetNum(num)
  }
  return (
    <div>
      <div className="bg-[#9538e2] pt-6 pb-2  md:pb-60 flex flex-col mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4  text-white">
            Product Details
          </h1>
          <p className="text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
        </div>
      </div>
      <div className="gap-5 mt-3 md:mt-[-160px] md:flex mx-auto relative md:w-[980px] border rounded-xl border-gray-300 p-8">
        <div className=" rounded-2xl md:w-120 border border-gray-400 ">
          <img className=" p-4  " src={product_image} alt="" />
        </div><br />
        <div className="   w-full p-5 border rounded-xl bg-white border-gray-400">
          <h1 className="mb-1 text-xl font-bold">{product_title}</h1>
          <p className="mb-1 font-bold text-gray-600">Price : ${price}</p>
          <p className="mb-1 text-gray-600 border w-fit px-1 rounded-xl">{availability ? "In Stock" : "out of stock"}</p>
          <p className="mb-1 text-gray-600">{description}</p>
          <div>
            <h1 className="mb-1 font-bold text-gray-600">Specificaton :</h1>
          {
            sp.map((s, idx) => <p className="mb-1 text-gray-600" key={idx}>{s}</p>)
          }
          </div>
          <p className="mb-2 font-bold text-gray-600">Rating :  {rating}</p>
          <button  className="btn bg-[#9538e2] rounded-xl mr-3">Add to Cart <FaShoppingCart></FaShoppingCart></button>
          <button  className="btn btn-outline border-[#9538e2] btn-primary rounded-full"><GiSelfLove></GiSelfLove></button>

        </div>
      </div>
    </div>
  );
};

export default Detail;
