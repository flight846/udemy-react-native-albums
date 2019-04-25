import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={ styles.containerSyle }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    containerSyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
})


export default CardSection
