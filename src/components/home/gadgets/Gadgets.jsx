import { useEffect, useState } from "react";
import Gadget from "../../gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    fetch("../../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  return (
    <div className="md:flex bg-[#d9d9d980]   p-10 gap-5 rounded-2xl border border-gray-300">
      <div className="w-1/4 flex mx-auto justify-center rounded-2xl bg-white h-fit ">
        <div className="flex flex-col w-50 my-7 gap-5 ">
          <button className="btn btn-outline btn-primary ">All Products</button>
          <button className="btn btn-outline btn-primary">Smartphones</button>
          <button className="btn btn-outline btn-primary">Airbus</button>
          <button className="btn btn-outline btn-primary">Smartwatch</button>
          <button className="btn btn-outline btn-primary">Laptop</button>
        </div>
      </div>
      <div className="w-3/4 grid lg:grid-cols-3 md:grid-cols-2  ">
        {gadgets.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
