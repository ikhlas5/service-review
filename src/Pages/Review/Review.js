import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UseContext/UseContext';
import SingleReview from './SingleReview/SingleReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const {user}=useContext(AuthContext);
    console.log();
    const [review, setReview] = useState([])
    // const data =useLoaderData();
    // console.log(data);

    useEffect(() => {
        fetch(`https://service-review-75d6b.web.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`https://service-review-75d6b.web.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('deleted successfully',{
                        position: "top-center"
                    });
                    const remaining = review.filter(odr => odr._id !== id);
                    setReview(remaining);
                }
            })
        }
    };

    const handleStatusUpdate = id => {
        fetch(`https://service-review-75d6b.web.app/reviews${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = review.filter(odr => odr._id !== id);
                const approving = review.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setReview(newOrders);
            }
        })
    }

    return (
        <div>
            <div>
            {/* <h2 className="text-5xl">You have {orders.length} Orders</h2> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Service Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(item=><SingleReview key={item._id
                            }
                            item={item}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                            ></SingleReview>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Review;