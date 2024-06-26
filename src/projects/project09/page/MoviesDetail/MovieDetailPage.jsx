import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Col, Container, Row } from 'react-bootstrap';
import './MovieDetailPage.style.css';
import Banner from '../../page/HomePage/components/Banner/Banner';
import Reviews from './components/Reviews';
import RelatedMovie from './components/RelatedMovie';
import Alert from 'react-bootstrap/Alert';

const MovieDetailPage = () => {
    const param = useParams();
    const { id } = param;

    const { data, isLoading, isError, error } = useMovieDetailQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        <Alert variant="danger">{error.message}</Alert>;
    }

    console.log(data);
    return (
        <>
            <Banner movie={data?.data} />
            <Container className="pb-5">
                <Row>
                    <Col xs={12} lg={6} className="d-flex justify-content-center mt-5">
                        <img
                            className="w-80"
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
                        />
                    </Col>
                    <Col xs={12} lg={6} className="mt-5">
                        <div className="d-flex mb-4">
                            {data?.genres.map((genre, index) => (
                                <div className="movie-badge me-2" key={index}>
                                    {genre.name}
                                </div>
                            ))}
                        </div>
                        <h1 className="movie-title">{data.title}</h1>
                        <h3>{data.tagline}</h3>
                        <div className="py-4 movie-number  border-bottom border-white">
                            <span>
                                <img src="/IMDB.png" width={30} className="me-1" />
                                {data.vote_average}
                            </span>
                            <span>
                                <img src="/people4.png" width={30} className="ms-3 me-1" />
                                {data.popularity}
                            </span>
                            <span>
                                {data.adult ? (
                                    <img src={'/over18.svg'} width={30} className="ms-2" />
                                ) : (
                                    <img src={'/under18.svg'} width={30} className="ms-2" />
                                )}
                            </span>
                        </div>
                        <div className="py-4 border-bottom border-white">{data.overview}</div>
                        <div className="py-4">
                            <div className="d-flex align-items-center mb-2">
                                <div className="movie-detail-badge me-2">Budget</div>
                                <div>$ {data.budget.toLocaleString()}</div>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <div className="movie-detail-badge me-2">Revenue</div>
                                <div>$ {data.revenue.toLocaleString()}</div>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <div className="movie-detail-badge me-2">Release Date</div>
                                <div>{data.release_date}</div>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <div className="movie-detail-badge me-2">Run time</div>
                                <div>{data.runtime}분</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <RelatedMovie id={id} />
                <Reviews id={id} />
            </Container>
        </>
    );
};

export default MovieDetailPage;
