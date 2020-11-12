import React from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Review.css'
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from  '../../../fakeData/product';


const Review = () => {

 const handleData = () => {
    fetch('https://lit-hollows-73598.herokuapp.com/addServices',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fakeData)
    })
    .then(res => console.log(res))
 }



    const [reviewData, setReviewData] = useState([]);
    console.log(reviewData)
    useEffect(() => {
            fetch('https://lit-hollows-73598.herokuapp.com/feedbacksByData')
            .then(res => res.json())
            .then(data => setReviewData(data))
        }, []);
        return (

    <section className="review my-5 py-5">
        <div className="container-fluid">
            <div className="text-center">
                <h5 className="text_brand" style={{color:'#171B4E'}}>Clients <span className="text_brand_color">Feedback</span></h5>
            </div>
            <div className="mx-5 px5 row mt-5 pt-5">
                    {
                        reviewData.map(feedback => <ReviewInfo key={feedback._id} feedback={feedback}/>)
                    }
            </div>
        </div>
</section>


    );
};

export default Review;