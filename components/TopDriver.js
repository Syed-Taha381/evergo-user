import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Carousel from './Carousel'
import DriverCarousel from './DriverCarousel'

const TopDriver = () => {
    return (
        <View style={{ marginTop: -65 }}>
            <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}>
                    <Image
                        source={require('./assets/three-stars.png')}
                    />
                    <Text style={{ color: '#2a4891', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Top Driver</Text>
                </View>
                <Image
                    source={require('./assets/filter-place.png')}
                    style={{ marginTop: 15, marginRight: 15 }}
                />
            </View>
            <DriverCarousel />
        </View>
    )
}

export default TopDriver

const styles = StyleSheet.create({})