import './DetailsBanner.css';
function DetailsBanner({details}){
    const genre=details.genres  || [];
    //console.log(genre);
    return(
        <div className='details-banner'>
            <div className='details-banner-img'>
                <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
            </div>
            <div className='details-banner-title'>
                {details.original_title}
            </div>
            <div className='details-banner-genre'>
            {genre.map((item) => {
            return <>{item.name} </>;
            })}
            </div>
            <div className='Trailer'>
                {details.videos && <a href={`https://www.youtube.com/watch?v=${details.videos.results[1].key}`} target="_blank">
                    
                Watch Trailer</a>}
            </div>
        </div>
    );
}

export default DetailsBanner;