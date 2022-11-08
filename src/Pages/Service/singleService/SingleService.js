import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id,img,price,text,service_name}=service
    console.log(service);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
  <figure><img src={img} alt='' /></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{text.length > 100 ? text.slice(0,150)+'...':text}</p>
    <p>${price}</p>
    <div className="card-actions justify-end">
        <Link to={`/serviceDetails/${_id}`}>
      <button className="btn btn-primary">Show Details</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleService;
