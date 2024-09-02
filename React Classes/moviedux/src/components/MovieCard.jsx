import React from "react";
import '../styles.css'

export default function MovieCard({movie,key,isWatchlisted,toggleWatchlist}){

 
    const handleError = (e)=>{
        e.target.src = 'images/default.jpg';
    }

    const getRatingClass = (rating)=>{
        if(rating >=8)
            return 'rating-good'
        if(rating <8 && rating >=5)
            return 'rating-ok'
            
        return 'rating-bad'
    }

    return (
     
            
        <div key={movie.id} className="movie-card">
                <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
                <div className="movie-card-info">
                    <div>
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <span className="movie-card-genere"> {movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</span>
                    
                    </div>
                    <label className="switch">

                    <input 
                    type="checkbox" 
                    checked={isWatchlisted} 
                    onChange={()=>toggleWatchlist(movie.id)} 
                    />
                    <span className="slider">
                        <span className="slider-label">
                            {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
                        </span>
                    </span>
                    </label>
                    </div>

            </div>
     
    );
}

