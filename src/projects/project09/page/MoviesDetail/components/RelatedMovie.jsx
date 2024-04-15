import React from 'react';
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies';
import { relatedMovieResponsive } from '../../../constants/responsive';
import MovieSlider from '../../../common/MovieSlider/MovieSlider';
import Alert from 'react-bootstrap/Alert';

const RelatedMovie = ({ id }) => {
    const { data, isLoading, isError, error } = useRelatedMoviesQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }
    return <MovieSlider title="Related Movies" movies={data.results} responsive={relatedMovieResponsive} />;
};

export default RelatedMovie;
