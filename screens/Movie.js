import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Movie = ({ name,price }) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    );
}

export default Movie;