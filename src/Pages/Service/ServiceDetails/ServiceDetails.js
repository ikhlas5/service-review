import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../UseContext/UseContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ServiceDetails = () => {
    const {ratting,img,text,service_name,price,_id}=useLoaderData();

    const {user}= useContext(AuthContext)
  

    const handleReview=(event)=>{
      event.preventDefault();
      const form = event.target;
      const name = `${form.firstName.value}`;
      const email = user?.email || 'unregistered';
      const phone = form.phone.value;
    //   const photoUrl = form.photoUrl.value;
      const photo_Url = user?.photoUrl;
      const message = form.message.value;

      const review = {
        service: _id,
        serviceName: service_name,
        price,
        customer: name,
        email,
        phone,
        photo_Url,
        message
    }

    fetch('https://b6a11-service-review-server-side-ikhlas5.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Add successfully',{
                      position:'top-center'
                    })
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));



    }

    return (
        <div>
            <h1 className='text-center text-2xl m-3 font-medium text-orange-600'>Name of Photographer:  {service_name}</h1>
             <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl mx-auto mt-5 mb-5">
      <PhotoProvider 
        speed={() => 800}
        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
      ><PhotoView src={img}>
        <img src={img} alt='' />
        </PhotoView></PhotoProvider>
   <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p className='text-sm'>{text}</p>
    <p className='text-xl font-medium'>Price: ${price}</p>
    <p className='text-sm'>ratting: {ratting}</p>
    <div className="card-actions justify-end">
        {/* <Link to={`/services/${_id}`}>
      <button className="btn btn-primary"></button>
        </Link> */}
    </div>
  </div>
</div>
            <form onSubmit={handleReview} className='w-8/12 mx-auto'>
                <h2 className="text-4xl">You are about to feedback: {service_name}</h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="photoUrl" type="text" placeholder="photoUrl" defaultValue={user?.photoUrl} className="input input-ghost w-full  input-bordered"  />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"  defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3 mb" placeholder="Your Message" required></textarea>

                <input className='btn flex justify-center mb-4' type="submit" value="Place Your Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServiceDetails;