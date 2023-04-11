import './App.css';
import { Route, Routes } from "react-router-dom";
import SubmissionForm from './SubmissionForm';
import Movies from './Movies';
import Navigation from './Navigation';
import React, { useState, useEffect } from "react";


function App() {

  let [movie, setMovies] = useState(null);

  useEffect( () => {
    fetch("/api/movies")
    .then(reponse => reponse.json())
    .then(setMovies)
    .catch(e=>console.log(e.message))
    }, [])

  return (
    <>
      <Navigation />
         <Routes>
           <Route path="/" element={<Movies movies={(movie)} setMovies={(setMovies)}/>} />
           <Route path="/submission" element={<SubmissionForm movies={(movie)} setMovies={(setMovies)}/>} />
         </Routes>
    </>
    );
}

export default App;
