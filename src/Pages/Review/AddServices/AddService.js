import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../UseContext/UseContext';

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handleAddService=(event)=>{
        event.preventDefault()
        const form = event.target;
        const img = form.imageUrl.value;
        const  name= form.name.value;
        const  serviceName = form.serviceName.value;
        const   text = form.description.value;
        const price = form.price.value;

        const serviceInfo = {img,name,serviceName,text,price};

        fetch('https://service-review-75d6b.web.app/AddService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.acknowledged){
                    toast.success('Add Successfully',{
                        position:'top-center',
                        theme:'dark'
                    })
                    form.reset();
                     //added toast
    
 
   
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <form onSubmit={handleAddService} className='w-8/12 mx-auto'>
                <h2 className="text-4xl">You are about to : </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="imageUrl" type="text" placeholder="photoUrl"  className="input input-ghost w-full  input-bordered"  />

                    <input name="serviceName" type="text" placeholder="Service name" className="input input-ghost w-full  input-bordered" required />
                  
                    <input name="email" type="text" placeholder="Your email"  defaultValue={user?.email} className="input input-ghost w-full  input-bordered"  />

                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />
                </div>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full mt-3 mb" placeholder="Your Message" required></textarea>

                <input  className='btn flex justify-center mb-4' type="submit" value="Place Your Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddService;