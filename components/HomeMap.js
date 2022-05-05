import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const HomeMap = () => {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1, height: 300, width: '96%', marginLeft: 10, borderRadius: 25 }}
            region={{
                latitude: 11.502010,
                longitude: 104.997960,
                latitudeDelta: 1,
                longitudeDelta: 1
            }}
            query={{
                key: 'AIzaSyDPUtYKCKLl5MNj3SvDJox4wYpe4uBmxcs',
                language: 'en'
            }}
            debounce={400}
            fetchDetails={true}
        />
    )
}

export default HomeMap

const styles = StyleSheet.create({})