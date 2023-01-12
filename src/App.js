import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';
import LoadingBar from 'react-top-loading-bar';
const App = ()=>{

 
  // state = {
  //   mode :'light'
   
  // }

  const [country,setCountry] = useState('in');
  const [alert,setAlert] = useState(null);
  const [progress,setProgress] = useState(0);


 


 

const apikey = process.env.REACT_APP_NEWS_API;



const updateProgress= (prog)=>{
  setProgress(prog)
}
//Method to change the  prop value country then passing this method again as a prop in component
const changeCountry = (cnt)=>{
 setCountry(cnt)
 triggerAlert(cnt);
  setTimeout(() => {
    setAlert(null)
  },2000);
  }
 const  triggerAlert = (country)=>{
    setAlert(country);
   
  }
const pageSize = 15;


   
  //   const togglemethod = ()=>{
  //     if(mode==='light'){
  //     setState({
  //      mode : 'dark',
      
  //     })
  //      document.body.style.backgroundColor = 'black';
  //      document.body.style.color = 'white';
  //   }
  //   else{
  //     setState = ({
  //       mode:'light',
     

  //     })
  //     document.body.style.backgroundColor = 'blue';
  //     document.body.style.color ='red';
  //   }
  // }  
    return (
        <Router>
          
      <div>
        <>
     {/* <h1>{country}</h1> */}
        
        <Navbar /*togglemethod ={togglemethod} mode = {mode} */changeCountry = {changeCountry} country={country}  />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height= {3}
        ></LoadingBar>
        <Alert alert={alert}/>
        <Routes>
        <Route exact path ="/science" element ={<News apikey ={apikey} updateProgress = {updateProgress} key = "science" pageSize={pageSize} country = {country} category = "science"/>}/>
        <Route exact path ="/business" element ={<News apikey ={apikey} updateProgress = {updateProgress} key = "business"pageSize={pageSize} country = {country} category = "business"/>}/>
        <Route exact path ="/health" element ={<News apikey ={apikey} updateProgress = {updateProgress} key = "health" pageSize={pageSize} country = {country} category = "health"/>}/>
        <Route exact path ="/sports" element ={<News apikey ={apikey} updateProgress = {updateProgress} key = "sports" pageSize={pageSize} country = {country} category = "sports"/>}/>
        <Route exact path ="/entertainment" element ={<News apikey ={apikey} updateProgress = {updateProgress} key ="entertainment" pageSize={pageSize} country = {country} category = "entertainment"/>}/>
        <Route exact path ="/general" element ={<News apikey ={apikey} updateProgress = {updateProgress} key ="general" pageSize={pageSize} country = {country} category = "general"/>}/>
        <Route exact path ="/" element ={<News apikey ={apikey} updateProgress = {updateProgress} key ="general" pageSize={pageSize} country = {country} category = "general"/>}/>
        <Route exact path ="/technology" element ={<News apikey ={apikey} updateProgress = {updateProgress} key = "technology" pageSize={pageSize} country = {country} category = "technology"/>}/>
        <Route exact path ="/about" element = {<div className = "container d-flex" style={{height:'60vh',width :'70vw'}} ><About/></div>}></Route>
        
        
        </Routes>
        </>
      </div>
      </Router>
    )
  


    }
    export default App