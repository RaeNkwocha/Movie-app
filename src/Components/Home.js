import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Useform from './Useform'
import Validateform from './Validateform'
import { Link } from 'react-router-dom'
import './Css/home.css'
import {fade,makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fcfcfb',
        width:300,
        height:40,
        margin:10,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
          backgroundColor: '#fff',
        },
        "&::placeholder": {
            color: "gray"
          },
        '&$focused': {
          backgroundColor: '#fff',
          boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
          borderColor: theme.palette.primary.main,
        },
      },
      input: {
          display:"flex",
          margin:"auto",
          position: "absolute",
          top: "50",
          left: "50%",
          transform: "translate(-50%, -10%)",
          width:300,
          height:40,
          overflow: 'hidden',
      },
      
      focused: {},
    }));
   
    
    
function Home({submitForm}) {
    const classes = useStyles();
    const {handleChange,values,handleSubmit,errors}=Useform(submitForm,Validateform)
  

    return (
     <div className='body'>
         <div className='centered'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <div className="input-field">
            <form   type="submit" onSubmit={handleSubmit}>
                <div className={classes.root}>
                {errors.email ? (<TextField name="email" value={values.email} onChange={handleChange} className={classes.input}  error id="outlined-error-helper-text" label="Email required!" defaultValue="Hello World" helperText="Incorrect entry."  variant="outlined"/>):   <TextField name="email" value={values.email} onChange={handleChange} className={classes.input}  id="outlined-basic" label="Email" type="Email" variant="outlined" /> }
              
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
                
                  <Link  to='/trending' >
                  <Button type="submit" className='btn'  variant="contained" color="secondary">Get Started</Button>
                  </Link>
                
            </form>
            </div>
          
         </div>
        
        </div>
       
       
    )
}
export default Home
