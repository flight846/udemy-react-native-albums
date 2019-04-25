import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

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

    renderAlbums() {
        return this.state.albums.map(album => {
            return (
                <AlbumDetail
                    key={album.title}
                    title={album.title}
                    artist={album.artist}
                    thumbnail={album.thumbnail_image}
                />
            )
        })
    }

    render() {
        console.log(this.state.albums);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

const styles = StyleSheet.create({

})


export default AlbumList;
