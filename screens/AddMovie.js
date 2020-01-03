import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const AddMovie = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const addMovie = () => {
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
    };

   const changeName = () => {
        let lastMovies = {...movies};
        lastMovies.name = name;
        lastMovies.price = price;
        setMovies(lastMovies);
    };
    return (
        <View style={{ marginTop: 100 }} >
            <TextInput onChangeText={value => setName(value)} />
            <TextInput onChangeText={value => setPrice(value)} />
            <Button title="Ekle" onPress={() => changeName()}></Button>
        </View>
    );
}

export default AddMovie;