import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'

const Tabs = () => {
    return (
        <View>
            <ImageBackground
                source={require('./assets/tabs-back.png')}
                style={{ width: '100%', height: 85 }}
            >
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 15 }}>
                    <View>
                        <Image
                            source={require('./assets/round.png')}
                            style={{ width: 45, height: 45, marginLeft: 28, marginTop: 5 }}
                        />
                        <Image
                            source={require('./assets/menu-home.png')}
                            style={{ position: 'absolute', top: 12, left: 37, width: 25, height: 25 }}
                        />
                        <Text style={{ color: 'white', marginLeft: 28, marginTop: 5 }}>Home</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            source={require('./assets/menu-profile.png')}
                            style={{ width: 20, height: 20, marginTop: 35 }}
                        />
                        <Text style={{ color: 'white', }}>My Profile</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            source={require('./assets/Pick_me.png')}
                            style={{ width: 25, height: 20, marginTop: 35, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: 'white', fontSize: 12, marginTop: 2 }}>Pick Me Up</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            source={require('./assets/menu-wishlist.png')}
                            style={{ width: 30, height: 20, marginTop: 35, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: 'white', fontSize: 12, marginTop: 2 }}>Wishlist</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            source={require('./assets/icon-history.png')}
                            style={{ width: 25, height: 20, marginTop: 35, resizeMode: 'contain' }}
                        />
                        <Text style={{ color: 'white', fontSize: 12, marginTop: 2 }}>History</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Tabs

const styles = StyleSheet.create({})