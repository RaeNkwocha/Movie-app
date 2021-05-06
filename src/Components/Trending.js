import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Css/trend.css'
import Movies from './Movies'
import Custompagination from './Pagination'
import BasicPagination from './Pagination'

function Trending() {
    
    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)
     useEffect(()=>{
     fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    .then((res)=>res.json())
    .then((data)=>{
    setMovies(data.results)
})  
window.scroll(0,0)

},[page])
    return (
        <>
        <div className="display">
        
            <div className='trend'>
                <h1>Trending </h1>
            </div>
            <div className="movie_page">
                {movies.length > 0 && movies.map((movie)=><Movies key={movie.id}
                                                                  title={movie.title||movie.name}
                                                                  poster={movie.poster_path}
                                                                  vote_average={movie.vote_average}
                                                                  release_date={movie.first_air_date || movie.release_date}
                                                                  media_type={movie.media_type}
                                                                  popularity={movie.popularity}
                                                                  overview={movie.overview}
                                                                  id={movie.id}
                
                
                
                ></Movies>
        
               )}
                       </div>
                       
        
        </div>
        <BasicPagination setPage={setPage}></BasicPagination>
        </>
    )
}

export default Trending
