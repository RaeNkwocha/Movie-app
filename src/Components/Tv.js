import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import BasicPagination from './Pagination'

function Tv() {
    const [tv, setTv]=useState([])
    const [page, setPage]=useState(1)
    useEffect(()=>{
            fetch(` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en&page=${page}`)
            .then((res)=>res.json())
            .then((data)=>{
                setTv(data.results)
            })
            window.scroll(0,0)
    },[page])
    return (
      <div>
            <div className='trend'><h1>Tv series</h1></div>      
            <div className="movie_page">
                {tv.length > 0 && tv.map((serie)=>{
                    return<Movies key={serie.id}
                    title={serie.title||serie.name}
                    poster={serie.poster_path}
                    vote_average={serie.vote_average}
                    release_date={serie.first_air_date || serie.release_date}
                    movie_type="Tv Series"
                    popularity={serie.popularity}
                    overview={serie.overview}
                      id={serie.id}
                    ></Movies>

                })}
            </div>
            <BasicPagination setPage={setPage}></BasicPagination>
            
     </div>
    )
}

export default Tv
