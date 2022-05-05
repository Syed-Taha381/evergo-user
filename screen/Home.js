import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import PopularDestination from '../components/PopularDestination'
import TopDriver from '../components/TopDriver'
import HomeMap from '../components/HomeMap'
import Tabs from '../components/Tabs'

const Home = () => {
    return (
        <ScrollView>
            <View>
                <Header />
                <HomeBanner />
                <PopularDestination />
                <TopDriver />
                <View style={{ borderRadius: 25 }}>
                    <HomeMap />
                    <View style={{ position: 'absolute', top: 70, left: 135 }}>
                        <View style={{}}>
                            <Image
                                source={require('../components/assets/message-pop.png')}
                                style={{ width: 110, height: 45, borderRadius: 5 }}
                            />
                            <Text style={{ color: 'white', position: 'absolute', marginTop: 5, marginLeft: 10 }}>e24, Street 36</Text>
                        </View>
                        <Image
                            source={require('../components/assets/target-user.png')}
                            style={{ width: 40, height: 60, marginLeft: 35, marginTop: 5 }}
                        />
                    </View>

                </View>
                <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', width: "60%", borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: '20%', marginTop: -15, height: 25, }}>
                    <Text style={{ color: '#2a4891' }}>My Current Location:</Text>
                    <Text style={{ color: 'red' }}>24 Street 36</Text>
                </View>
                <Tabs />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})