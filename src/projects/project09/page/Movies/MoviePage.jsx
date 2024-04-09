import React, { useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import { Container, Spinner, Row, Col, Alert } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌
const MoviePage = () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get('q');
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

    if (isLoading) {
        return (
            <div className="spinner-area">
                <Spinner animation="border" variant="danger" style={{ width: '5rem', height: '5rem' }} />
            </div>
        );
    }

    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    const handlePageChange = ({ selected }) => {
        setPage(selected + 1);
    };

    return (
        <Container>
            <Row>
                <Col lg={4} xs={12}>
                    필터
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        {data?.results.map((movie, index) => (
                            <Col key={index} lg={4} xs={12}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={data?.total_pages} // 전체페이지
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                    forcePage={page - 1}
                />
            </Row>
        </Container>
    );
};

export default MoviePage;
