import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from 'react';
import './itemlists.scss';

function ItemLists({ type }) {
    let data;

    // Dynamically change the UI content
    switch (type) {
        case 'user':
            data = {
                title: 'Total Orders',
                isMoney: false,
                count: 232,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                linkto: '/users',
            };
            break;
        case 'orders':
            data = {
                title: 'Total Delivered',
                isMoney: false,
                count: 34,
                icon: (
                    <LocalGroceryStoreOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                linkto: '/orders',
            };
            break;
        case 'products':
            data = {
                title: 'Total Cancelled',
                isMoney: true,
                count: 107,
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#367E18',
                            backgroundColor: '#A7FFE4',
                        }}
                        className="icon"
                    />
                ),
                linkto: '/products',
            };
            break;
        case 'balance':
            data = {
                title: 'Total Revenue',
                count: 444,
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#B1B2FF',
                        }}
                        className="icon"
                    />
                ),
                linkto: '/',
            };
            break;
        default:
            break;
    }

    return (
        <div className="item_listss">
            <div className="left_section">
                <div className="icon">{data.icon}</div>
                <p>{data.title}</p>
                <div className="counts">
                    {data.isMoney && <AttachMoneyOutlinedIcon />}
                    {data.count}
                </div>
            </div>

            <div className="right_section">
                <span className="persentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </span>
            </div>
        </div>
    );
}

export default ItemLists;
