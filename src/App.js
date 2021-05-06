import React from 'react';
import BottomNav from './Components/Bottomnav'
import './App.css';
import Footer from './Components/Footer';
// import Home from './Components/Home';
import Nav from './Components/Nav';
import Trending from './Components/Trending';
import Movie from './Components/Movie';
import Search from './Components/Search';
import Tv from './Components/Tv';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import { Container } from '@material-ui/core';

function App() {
  // const [isSubmitted, setisSubmitted]=useState(false)
  // const submitForm=()=>{
  //     setisSubmitted(true)
  // }
  return (
    <Router>
          
          <Nav></Nav>
      <Switch>
        <Container>
       
      <Route path='/'  component={Trending}></Route>
      <Route path='/movies'  component={Movie}></Route>
      <Route path='/search'  component={Search}></Route>
      <Route path='/tv series'  component={Tv}></Route>
        </Container>
       
      </Switch>
     
      
        
      {/* {!isSubmitted ? (<Home submitForm={submitForm}></Home>):} */}
     

      <BottomNav></BottomNav>
     
 

      
    </Router>

 
  );
}
// const New = ()=>(
//   <>
//   <div>
//   <Home></Home>
//   <Footer></Footer>

//   </div>
       
//   </>
// )

export default App;
