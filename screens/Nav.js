import React,{useContext} from 'react';
import {MovieContext} from '../contexts/MovieContext';
import { StyleSheet, Text, View } from 'react-native';

 const Nav = ({ name,price }) => {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <View>
            <Text> Dev Ed </Text>
            <Text> List of movies: {movies.length} </Text>
        </View>
    );
}

export default Nav;