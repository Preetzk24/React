import {useState,useEffect} from 'react';
import Cast from '../Cast';
import DetailsBanner from '../DetailsBanner';

function Details(){
    let [details,setDetails] = useState([]);
    useEffect(function(){
        fetch("https://api.themoviedb.org/3/movie/843527?api_key=b0c14dcfa5a93c3431dd45f7adc1a21a&append_to_response=credits,videos")
        .then((res) => {
            return res.json();
        }).then((res) => {
            setDetails(res);
        })
    },[]);
    return(
        <div>
            <DetailsBanner details={details} />
            <h2>CAST</h2>
            {details.credits ? <Cast cast={details.credits.cast.slice(0,8)} /> : null}
            
        </div>
    )
}

export default Details;