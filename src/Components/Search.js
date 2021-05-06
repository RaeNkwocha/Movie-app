import React, { useEffect, useState } from 'react'
import { createMuiTheme, makeStyles,  ThemeProvider,  Tab
} from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import { Button, Tabs } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Movies from './Movies';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        
      },
    },
  }));
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

function Search() {
    const classes = useStyles();
    const [ content, setContent]=useState([])
    const [page, setPage]=useState(1)
    const [type,setType]=useState(0)
    const [searchText, setSearchtext]=useState("")
    const fetchSearch = async () => {
        try {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
          );
          setContent(data.results);
          // console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(()=>{
       
        window.scroll(0, 0);
        fetchSearch();
    },[type,page])
  
  
    return (
        <div>
           <div className={classes.root} noValidate autoComplete="off">
           
           <ThemeProvider theme={darkTheme}>
               <div  style={{  marginTop:"20px",display:"flex" }} >
              
      <TextField
         style={{width:"100%"}}
        id="filled-secondary"
        label="Search"
        variant="filled"
        color="primary"
        onChange={(e)=>setSearchtext(e.target.value)}
        typeof="submit"    
  />  <Button   onClick={fetchSearch()}   variant="contained"> <SearchOutlined ></SearchOutlined> </Button>
      </div>

     <div className="search">
         <Tabs value={type} 
         indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
         
         >
          <Tab   style={{ width: "50%" }} label="Search Movies"/>
          <Tab style={{ width: "50%" }} label="Search TV Series"/>
         </Tabs>
     </div>
    
      </ThemeProvider>
    </div>
    <div className="movie_page">
        { content && content.map((search)=>{
            return <Movies key={search.id}
            title={search.title||search.name}
            poster={search.poster_path}
            vote_average={search.vote_average}
            release_date={search.first_air_date || search.release_date}
            media_type={type ? "tv" : "movie"}
            popularity={search.popularity}
            overview={search.overview}
            id={search.id}
            
            ></Movies>
        })}
       
        {searchText &&
          !content &&
          (type ? <h2 style={{color:"white"}}>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      

        </div>
    )
}

export default Search






 
