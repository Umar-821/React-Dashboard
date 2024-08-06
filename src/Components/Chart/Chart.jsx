import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './chart.scss';

const data = [
    { name: 'January', total: 700 },
    // { name: 'February', total: 1250 },
    { name: 'March', total: 1410 },
    // { name: 'April', total: 1100 },
    { name: 'May', total: 700 },
    // { name: 'June', total: 1000 },
    { name: 'July', total: 1250 },
    // { name: 'August', total: 1050 },
    { name: 'September', total: 800 },
    { name: 'October', total: 960 },
    { name: 'November', total: 1150 },
    { name: 'December', total: 1250 },
];

function Chart({ height, title }) {
    return (
        <div className="chart_sec">
            <div className="chart_card">
                <div className="title">
                    <p>{title}</p>
                </div>
                <ResponsiveContainer width="104%" height={height}>
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" className="strokee" />
                        <XAxis dataKey="name" stroke="gray" />
                        <Tooltip />
                        <Bar dataKey="total" fill="#536def" animationDuration={1500} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Chart;
