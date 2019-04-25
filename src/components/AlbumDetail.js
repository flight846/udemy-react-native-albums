import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        // Card
        <Card>
            <CardSection>
                <View>
                    <Image 
                        source={{ uri: props.thumbnail }}
                        style={ styles.thumbnailSyle }
                    />
                </View>
                <View style={ styles.headerContentStyle }>
                    <Text>{props.title}</Text>
                    <Text>{props.artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailSyle: {
        height: 50,
        width: 50,
    }
})


export default AlbumDetail
