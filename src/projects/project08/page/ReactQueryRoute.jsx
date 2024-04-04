import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Link, Routes, Route } from 'react-router-dom';
import ReactQueryHomePage from './ReactQueryHomepage';
import ReactQueryPage from './ReactQueryPage';
import HomeButton from '../../../HomeButton';
import NormalFetchPage from './NormalFetchPage';

const queryClient = new QueryClient();

const ReactQueryRoute = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <nav style={{ backgroundColor: 'beige', padding: '20px' }}>
                <HomeButton />
                <Link to="query" style={{ marginRight: '10px' }}>
                    HomePage
                </Link>
                <Link to="normal-fetch" style={{ marginRight: '10px' }}>
                    Normal Fetch
                </Link>
                <Link to="react-query">React Query</Link>
            </nav>

            <Routes>
                <Route path="query" element={<ReactQueryHomePage />}></Route>
                <Route path="normal-fetch" element={<NormalFetchPage />} />
                <Route path="react-query" element={<ReactQueryPage />}></Route>
            </Routes>

            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
        </QueryClientProvider>
    );
};

export default ReactQueryRoute;
