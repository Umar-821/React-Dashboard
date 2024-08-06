import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
// import TableList from '../TableList/TableList';
import Feedback from '../Feedback/Feedback';
import './orders.scss';

function Orders() {
    return (
        <div className="orders">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="orders_main">
                <Navbar />

                <Feedback />
            </div>
        </div>
    );
}

export default Orders;
