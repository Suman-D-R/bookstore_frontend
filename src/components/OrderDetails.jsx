import React from 'react';
import { useSelector } from 'react-redux';
import '../sass/OrderDetails.scss';
import OrderBookCard from './OrderBookCard';

function OrderDetails() {
    const data = useSelector((store) => store.order.orderItems);

    return (
        <div className='my-order-container'>
            {data.data.orderData.map((order) => (
                order.items.map((book) => (
                    <div className='myorder-book' key={book._id}>
                        <OrderBookCard data={book} />
                    </div>
                ))
            ))}
        </div>
    );
}

export default OrderDetails;
