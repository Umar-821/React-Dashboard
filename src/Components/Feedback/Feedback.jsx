import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React from 'react';
import './feedback.scss';

function Feedback() {
    const feedbackData = [
        {
            id: 1,
            customer: 'John Doe',
            rating: 5,
            review: 'Excellent book! Highly recommended for programming enthusiasts.',
        },
        {
            id: 2,
            customer: 'Jane Smith',
            rating: 4,
            review: 'Very good book, but some chapters are a bit too advanced for beginners.',
        },
        {
            id: 3,
            customer: 'Alice Johnson',
            rating: 3,
            review: 'Average content. Some parts are informative, but others are lacking depth.',
        },
        {
            id: 4,
            customer: 'Bob Brown',
            rating: 2,
            review: 'Not what I expected. The book didn’t cover the topics I was interested in.',
        },
        {
            id: 5,
            customer: 'Charlie Green',
            rating: 1,
            review: 'Poorly written and full of errors. Not worth the money.',
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i += 1) {
            if (i < rating) {
                stars.push(<StarIcon key={i} className="star filled" />);
            } else {
                stars.push(<StarOutlineIcon key={i} className="star outlined" />);
            }
        }
        return stars;
    };

    return (
        <div className="feedback">
            {feedbackData.map((feedback) => (
                <div key={feedback.id} className="feedback_item">
                    <div className="feedback_header">
                        <h3 className="customer_name">{feedback.customer}</h3>
                        <div className="stars">{renderStars(feedback.rating)}</div>
                    </div>
                    <p className="review">{feedback.review}</p>
                </div>
            ))}
        </div>
    );
}

export default Feedback;
