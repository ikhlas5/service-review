import React, { useEffect, useState } from 'react';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';

const SingleReview = ({item, handleDelete, handleStatusUpdate}) => {
    const { _id, serviceName, phone, customer, price, service, status,photoUrl,email,message } = item;

    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])

    console.log(item)
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><FaTrashAlt></FaTrashAlt></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                reviewService?.photoUrl && 
                                <img src={reviewService.photoUrl} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                
            </td>
            <td>{message}</td>
            <td>{serviceName}
            <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
        </tr>
    );
};

export default SingleReview;