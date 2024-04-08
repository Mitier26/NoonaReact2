import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMoviesSlide from './components/PopularMoviesSlide/PopularMoviesSlide';
import TopRatedMoviesSlide from './components/TopRatedMoviesSlide/TopRatedMoviesSlide';
import UpcomingMoviesSlide from './components/UpcomingMoviesSlide/UpcomingMoviesSlide';
// 베너 : 인기영화를 가지고과 보여준다.

const NetflixHomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularMoviesSlide />
            <TopRatedMoviesSlide />
            <UpcomingMoviesSlide />
        </div>
    );
};

export default NetflixHomePage;
