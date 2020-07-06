import React, { useState, useEffect } from 'react';
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL,
  } from '../config';
  
// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

const Home = () => {
    const [ state, setState ] = useState({movies: [] });
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    console.log(state);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);
        try {
            const result = await (await fetch(endpoint)).json();
            setState(prev => {
                ...prev,
            }));
        } catch (error) {
        
        }
        setLoading(false);
    }

    return (
        <>
        <HeroImage />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
    )
}




export default Home;