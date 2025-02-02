


import React from 'react';
import PropTypes from 'prop-types';

const Gadget = ({gadget}) => {
    const {product_id, product_title, price, product_image} = gadget
    return (
        <div className="card bg-base-100 w-85 shadow-xl mr-20 mb-7 ">
        <figure className="px-10 pt-10">
          <img
           
            src={product_image}
            alt="Shoes"
            className="rounded-xl h-50" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-bold text-gray-600">{product_title}</h2>
          <p className='font-bold text-gray-600'>{price}</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-primary rounded-2xl">View Details</button>
          </div>
        </div>
      </div>
    );
};

Gadget.propTypes = {
    
};

export default Gadget;