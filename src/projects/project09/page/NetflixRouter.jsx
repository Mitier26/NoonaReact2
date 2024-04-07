import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NetflixPage from './NetflixPage';
import NetflixHomePage from './HomePage/NetflixHomePage';
import MoviePage from './Movies/MoviePage';
import MovieDetailPage from './MoviesDetail/MovieDetailPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 홈페이지
// 영화 전체보여주는 페이지
// 영화 디테일 페이지

const queryClient = new QueryClient();

const NetflixRouter = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<NetflixPage />}>
                    {/* index는 path='/' 와 같은 뜻 */}
                    <Route index element={<NetflixHomePage />} />
                    {/* movies를 공통으로 사용하는 쿼리를 묶어줄 수 있다. */}
                    <Route path="/movies">
                        <Route index element={<MoviePage />} />
                        <Route path=":id" element={<MovieDetailPage />} />
                    </Route>
                    {/* <Route path="/movies" element={<MoviePage />} />
                <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </QueryClientProvider>
    );
};

export default NetflixRouter;
