// import Pagination from '@material-ui/lab/Pagination';
// import React from 'react'

// function Custompagination({setPage}) {
//     const handleChange=(page)=>{
//         setPage(page)
//         window.scroll(0,0)
//     }
//     return (
//         <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"10"}}>
//              <Pagination count={10} onChange={(e)=> handleChange(e.target.textContent)} />
    
//         </div>
//     )
// }

// export default Custompagination
import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
const darkTheme=createMuiTheme({
    palette:{
        type:"dark"
        
    }
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      width:"100%",display:"flex",justifyContent:"center"
    },
  },
}));

export default function BasicPagination({setPage}) {
    const handleChange=(page)=>{
               setPage(page)
                window.scroll(0,0)
           }
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <ThemeProvider theme={darkTheme}>
        <Pagination hideNextButton hidePrevButton style={{paddingBottom:"20%"}} onChange={(e)=>handleChange(e.target.textContent)} count={10} color="secondary" />
        </ThemeProvider>
      
      {/* <Pagination count={10} color="primary" /> */}
    
     
    </div>
  );
}

