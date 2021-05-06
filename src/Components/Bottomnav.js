import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { Home, MovieCreation, Search, Tv, Whatshot } from '@material-ui/icons';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom:0,
    position:'fixed',
    backgroundColor:'black',
    zIndex:1
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history= useHistory()
useEffect(()=>{
  // if(value===0){
  //   history.push("/")
  // }
   if(value===0){
    history.push("/trending")

  } else if(value===1){
    history.push('/movies')
  }else if(value===2){
    history.push('/search')
  } else if(value===3){
    history.push('/tv series')
  }
},[value,history])
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Home" style={{color:'#c51162'}} icon={<Home />} /> */}
      <BottomNavigationAction label="Trending" style={{color:'#c51162'}} icon={<Whatshot />} />
      <BottomNavigationAction label="Movies" style={{color:'#c51162'}} icon={<MovieCreation />} />
      <BottomNavigationAction label="Search" style={{color:'#c51162'}} icon={<Search />} />
      <BottomNavigationAction label="Tv Series" style={{color:'#c51162'}} icon={<Tv />} />
    </BottomNavigation>
    
  );
}

