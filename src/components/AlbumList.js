import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios'

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({
                    albums: res.data
                })
            })
    }

    render() {
        const { albums } = this.state;
        console.log(albums)
        return (
            <View>
                <Text>Album List</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default AlbumList;
