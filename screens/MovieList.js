import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableWithoutFeedback } from 'react-native';
import { MovieContext } from '../contexts/MovieContext';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <View style={{marginTop:50}}>
            <Movie name={movies.name} price={movies.price}></Movie>
        </View>
        );
    }
    
export default MovieList;