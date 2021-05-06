import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300 } from '../config/config'
import './Css/movie.css'
import TransitionsModal from './Newmodal'


function Movies({id,title,poster,overview,vote_average,release_date,first_air_date,media_type,popularity,}) {
    return (
<TransitionsModal poster={poster} media_type={media_type} overview={overview} release_date={release_date} first_air_date={first_air_date} title={title} id={id}>


            <div className="movie_card">
           
                    <div className="img_holder">
                  
                    <img src={`${img_300}/${poster}`}></img>
                    </div>
                    <h5 style={{color:"white"}}>  {title}</h5>
                    <div className="desc">
                        <div>{media_type}</div>
                        <div>{release_date}</div>
                    </div>
                    <Badge badgeContent={vote_average} color={vote_average > 7 ? "primary":"secondary"  } ></Badge>
            </div>
         
            </TransitionsModal>            )
}

export default Movies
