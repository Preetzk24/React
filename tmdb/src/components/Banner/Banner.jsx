import {useState,useEffect} from 'react';
import './Banner.css'
function Banner(){
    let [film,setFilm] = useState([]);
    useEffect(function(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b0c14dcfa5a93c3431dd45f7adc1a21a")
        .then((res) => {
            return res.json();
        }).then((res) => {
            let id=Math.floor(Math.random()*20);
            setFilm(res.results[id]);
        })
    },[]);
    return (
            <div className="banner">
                <div className='banner-img'>
                    <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} />
                </div>
                <div className='banner-title'>
                    {film.title}
                </div>
            </div>
    )
}

export default Banner;