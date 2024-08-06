import React from 'react';
import Chart from '../Chart/Chart';
import ItemLists from '../ItemLists/ItemLists';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import TableList from '../TableList/TableList';
import './Home.scss';

function Home() {
    //
    return (
        <div className="home">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="home_main">
                <Navbar />

                {/* <div className="bg_color" /> */}
                <h2 className="dashboard-titles">Dashboard</h2>
                <div className="home_items">
                    <ItemLists type="user" />
                    <ItemLists type="orders" />
                    <ItemLists type="products" />
                    <ItemLists type="balance" />
                </div>

                <div className="chart_sec">
                    {/* <ProgressBar /> */}
                    <Chart height={450} title="Activity" />
                </div>

                <div className="table">
                    <div className="title">Recent Orders</div>
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default Home;
