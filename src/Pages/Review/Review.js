import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UseContext/UseContext';
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const {user}=useContext(AuthContext);
    const [review, setReview] = useState([])
    // const data =useLoaderData();
    // console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = review.filter(odr => odr._id !== id);
                    setReview(remaining);
                }
            })
        }
    };

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews${id}`, {
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
        </div>
    );
};

export default Review;