import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = ({service}) => {
    const {_id,img,price,text,service_name}=service
    console.log(service);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <PhotoProvider 
        speed={() => 800}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
      ><PhotoView src={img}>
        <img src={img} alt='' />
        </PhotoView></PhotoProvider>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{text.length > 100 ? text.slice(0,100)+'...':text}</p>
    <p>${price}</p>
    <div className="card-actions justify-end">
        <Link to={`/services/${_id}`}>
      <button className="btn btn-primary">Show Details</button>
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleService;
