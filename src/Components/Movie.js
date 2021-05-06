import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import Movies from './Movies'
import BasicPagination from './Pagination'

function Movie() {
    const [movie, setMovie]=useState([])
    const [page,setPage]=useState(1)
    const [genres, setGenres]=useState([])
    const [selectedGenres, setSelectedgenres]=useState([])
    useEffect(()=>{
        fetch(  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&page=${page}`  )
        .then((res)=>res.json())
        .then((data)=>{
                setMovie(data.results)
        })
        window.scroll(0,0)
            
    },[page])
    return (
        <>
        <div className='trend'>
                <h1>Movies </h1>
            </div>
            <Genres type="movie"selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setSelectedgenres={setSelectedgenres} setPage={setPage} />
            
        <div className="movie_page">
            
                {movie.length > 0 && movie.map((item)=>{
                return<Movies key={item.id}
                title={item.title||item.name}
                poster={item.poster_path}
                vote_average={item.vote_average}
                release_date={item.first_air_date || item.release_date}
                movie_type="movie"
                popularity={item.popularity}
                overview={item.overview}
                id={item.id}



></Movies>
            })}
        </div>
        <BasicPagination setPage={setPage}></BasicPagination>
        </>
    )
}

export default Movie
