import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    const navigate = useNavigate();

    const showGenre = (genreIdList) => {
        if (!genreData) return [];
        if (!genreIdList) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });

        return genreNameList;
    };

    return (
        <div
            style={{
                backgroundImage:
                    'url(' + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}` + ')',
            }}
            className="movie-card"
            onClick={() => navigate(`movies/${movie.id}`)}
        >
            <div className="overlay">
                <h1>{movie.title}</h1>
                <div>
                    {showGenre(movie.genre_ids).map((id, key) => (
                        <Badge bg="danger" key={key}>
                            {id}
                        </Badge>
                    ))}
                </div>
                <div>
                    <div>{movie.average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? 'over18' : 'under18'}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
