import React from 'react';
import { useMovieReviewsQuery } from '../../../hooks/useMovieReviews';
import ReviewBox from './ReviewBox';

const Reviews = ({ id }) => {
    const { data, isLoading, isError, error } = useMovieReviewsQuery(id);

    return (
        <div>
            <h3 className="fw-bold">Reviews</h3>

            {data.data.results.length === 0 ? (
                <div className="mb-5">0 reviews for this movie</div>
            ) : (
                data.data.results.map((review, index) => <ReviewBox review={review} key={index} />)
            )}
        </div>
    );
};

export default Reviews;
