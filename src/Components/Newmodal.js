import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { img_200, img_300, img_500, unavailable, unavailableLandscape } from '../config/config';
import { Button } from '@material-ui/core';
import { YouTube } from '@material-ui/icons';
import './Css/search.css'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "black",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({children,poster,overview,title,tagline,release_date,first_air_date,id,media_type}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content,setContent]=useState([])
  const [video,setVideo]=useState([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
        setContent(data.results)
        console.log(data)
    })
    fetchVideo()
},[])
  return (
    <>
        <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       <Fade in={open}>
         
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                    src={`${img_500}/${poster}`}
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img

                  src={`${img_200}/${poster}`}
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />

        <div  style={{textAlign:"center",paddingTop:2,}}><h2>{title} <span style={{fontSize:"15px"}}>({release_date||first_air_date })</span></h2></div>
                <div style={{height:"50%",fontSize:"0.8rem",paddingTop:"0.7rem"}}>
                  <p style={{color:"white",textAlign:"center"}}>{overview}</p>
                </div>
                <Button
                
                
                    variant="contained"
                    startIcon={<YouTube />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
              </div>
              
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}