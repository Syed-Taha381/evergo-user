import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

const HomeBanner = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#2a4891', marginLeft: 10, marginTop: 15 }}>Good morning! Where would you like to go today?</Text>
            <View>
                <Image
                    source={require('./assets/home-banner.png')}
                    style={{
                        width: "96%", height: 150, resizeMode: 'cover', alignself: 'center', marginLeft: '2%', borderRadius: 10, marginTop: 10
                    }}
                />
                <Text style={{ position: "absolute", right: '21%', top: "30%", fontWeight: 'bold' }}>Everything is 50%</Text>
                <Text style={{ position: "absolute", right: '12.5%', top: "45%", backgroundColor: '#2a4891', width: 200, height: 28, color: 'white', textAlign: 'center', borderRadius: 10, paddingTop: 2 }}>Welcome Welcome</Text>
            </View>

        </View>
    )
}

export default HomeBanner

const styles = StyleSheet.create({})