import {useState,useEffect} from "react";
import MovieCard from "../MovieCard";
import './Movies.css';
function Movies(){
    const [movies,setMovie] = useState([]);
    useEffect(function(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b0c14dcfa5a93c3431dd45f7adc1a21a")
        .then((response) => {
            return response.json();
        }).then((res) => {
            console.log(res);
            setMovie(res.results);
        })
    },[])
    return (
        <>
        <h1> Trending Movies </h1>
        <div  className="card-parent">
        {
            movies.map((movie)=> {
               return( <MovieCard movie ={movie} key={movie.id}/> )
            })
        }
        </div>
        
        </>
    )
}
export default Movies;