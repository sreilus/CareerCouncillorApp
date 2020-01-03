import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator';
import MovieList from './screens/MovieList';
import Nav from './screens/Nav';
import { MovieProvider } from './contexts/MovieContext';
import { ServiceProvider } from './contexts/ServiceContext'
import { UserProvider } from './contexts/UserContext'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <MovieProvider>
      <ServiceProvider>
        <UserProvider>
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </UserProvider>
      </ServiceProvider>
    </MovieProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
