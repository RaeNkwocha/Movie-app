import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './Css/nav.css'
import Modal from './Modal'
function Nav() {
    const [modal,setModal]=useState(false)
    
    return (
        <nav className='nav-holder'>
            <div className='home'>
                    <h1 onClick={()=>window.scroll(0,0)}>raenSportsmovieS</h1>
                    {/* <Button   variant="contained" color="secondary" onClick={openModal}> Sign In</Button>    */}
                    <Modal ></Modal>       
                </div>
        </nav>
        
    )
}

export default Nav
