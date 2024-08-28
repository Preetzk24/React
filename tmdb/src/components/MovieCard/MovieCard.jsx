import './MovieCard.css';
function MovieCard({movie}){
   return(
    <div className='movie-card'>
            <div className="movie-card-img">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
            </div>
            <div className='movie-card-title'>
                {movie.title}
            </div>
    </div>
   )
}
export default MovieCard;