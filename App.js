import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View>
            <Header headerText='Albums' />
            <AlbumList />
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        
    },
});
