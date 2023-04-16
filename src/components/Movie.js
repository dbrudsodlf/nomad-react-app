import { PropTypes } from "prop-types";
import {Link} from "react-router-dom"
import './Movie.css'
function Movie({id,year,coverImg, title, summary, genres }) {
    return (
        <div className="movie">
            <img className="movie_img" src={coverImg} alt="cover"/>
            <h2 className="movie_title">
                <Link to={`/movie/${id}`}>{title}</Link></h2>
            <h3 className="movie_year">{year}</h3>
            <p>{summary.length>235?`${summary.slice(0,235)}...`:summary}</p>
            <ul className="movie_genres">
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes={
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;