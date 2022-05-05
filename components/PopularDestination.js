import { StyleSheet, Text, View, Image } from 'react-native'
import React from "react";
import Carousel from './Carousel';

const data = [
    {
        id: '123',
        mainImage: require('./assets/popular.png')
    },
    {
        id: '456',
        mainImage: require('./assets/popular.png')
    },
    {
        id: '789',
        mainImage: require('./assets/popular.png')
    },
    {
        id: '147',
        mainImage: require('./assets/popular.png')
    },
]


const PopularDestination = () => {
    return (
        <View>
            <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ color: '#2a4891', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Popular Destination</Text>
                <Image
                    source={require('./assets/filter-place.png')}
                    style={{ marginTop: 15, marginRight: 15 }}
                />
            </View>
            <Carousel />
        </View>
    )
}

export default PopularDestination

const styles = StyleSheet.create({

})