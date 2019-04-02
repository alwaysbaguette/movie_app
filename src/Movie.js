import React from 'react';
import PropType from 'prop-types';
import LinesIllipsis from 'react-lines-ellipsis';
import './Movie.css';

const Movie = ({title,poster,genres,synopsis}) =>{
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index)=>{
                        return <MovieGenre genre={genre} key={index} />
                    })}
                </div>
                <div className="Movie__Synopsis">
                    <LinesIllipsis text={synopsis}
                        maxLine="3"
                        ellipsis="..."
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}
const MovieGenre = ({genre}) =>{
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

const MoviePoster = ({poster,alt}) =>{
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" ></img>
    )
}

MovieGenre.propTypes = {
    genre: PropType.string.isRequired
}
Movie.propTypes = {
    title: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.array.isRequired,
    synopsis: PropType.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropType.string.isRequired,
    alt: PropType.string.isRequired
}
export default Movie;