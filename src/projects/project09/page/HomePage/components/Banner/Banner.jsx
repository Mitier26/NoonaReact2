import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import { Button } from 'react-bootstrap';
const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        <h>로딩</h>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }
    return (
        <div
            style={{
                backgroundImage:
                    'url(' + `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` + ')',
            }}
            className="netflix_banner"
        >
            <div className="text-white banner-text-area">
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
                <Button variant="outline-danger">Show Detail</Button>
            </div>
        </div>
    );
};

export default Banner;
