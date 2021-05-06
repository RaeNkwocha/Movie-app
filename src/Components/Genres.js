// import { Chip } from '@material-ui/core'
// import axios from 'axios'
// import React, { useEffect } from 'react'

// function Genres({ type, selectedGenres, genres, setGenres, setSelectedgenre, setPage}) {
//     const handleClick=(genre)=>{
//         setSelectedgenre([...selectedGenres,genre])
//             setGenres(genres.filter((g)=>g.id !==genre.id))
//             setPage(1)
//     }
   
//     useEffect(()=>{
//         fetch( `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             setGenres(data.genres)

//         })
//             return()=>{
//                 setGenres({})
//             }
//     },[])
//     return (
//         <div style={{paddingTop:"100px"}} >
//              { selectedGenres.length > 0 && selectedGenres.map((genre)=>{
//                    return <Chip style={{margin:2}} size="small" key={genre.id} color="primary" clickable   label={genre.name} ></Chip>
//             })}
//             {genres.length > 0 && genres.map((genre)=>{
//                    return <Chip style={{margin:2}}  onClick={()=>handleClick(genre)} size="small" key={genre.id} clickable  label={genre.name} ></Chip>
//             })}
           
//   </div>
//     )
// }

// export default Genres
