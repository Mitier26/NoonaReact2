import React from 'react';
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies';
import { relatedMovieResponsive } from '../../../constants/responsive';
import MovieSlider from '../../../common/MovieSlider/MovieSlider';

const RelatedMovie = ({ id }) => {
    const { data, isLoading, isError, error } = useRelatedMoviesQuery(id);

    return <MovieSlider title="Related Movies" movies={data.results} responsive={relatedMovieResponsive} />;
};

export default RelatedMovie;
