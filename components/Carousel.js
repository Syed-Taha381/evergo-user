import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'

const data = [
    {
        image: require('./assets/popular.png')
    },
    {
        image: require('./assets/popular.png')
    },
    {
        image: require('./assets/popular.png')
    },
    {
        image: require('./assets/popular.png')
    },
]
const { width } = Dimensions.get("window")
const height = width * 100 / 60

const Carousel = () => {
    return (
        <View style={{ width: 300, height: 300, marginTop: 25, marginLeft: 10 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
            >
                {
                    data.map((item, index) =>
                        <View>
                            <Image
                                source={item.image}
                                key={index}
                                style={{ width: 320, resizeMode: "cover", marginRight: 25, height: 200, borderRadius: 15 }}
                            />
                            <View style={{ width: 290, height: 70, position: "absolute", top: 160, backgroundColor: 'white', borderRadius: 40, left: 16 }}>
                                <View style={{ marginLeft: 22, marginTop: 2, display: 'flex', flexDirection: 'row' }}>
                                    <View >
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Text style={{ color: "#2a4891", fontWeight: 'bold' }}>Aeon Mall Tonel Bas...</Text>
                                            <Image
                                                source={require('./assets/golden-start.png')}
                                                style={{ width: 22, height: 20 }}
                                            />
                                            <Text style={{ marginLeft: 2 }}>4.0</Text>
                                        </View>
                                        <Text style={{ fontSize: 12, color: '#939497' }}>Daily vegetables, and ingredients</Text>
                                        <Text style={{ fontSize: 12, color: '#44b33e', fontWeight: 'bold' }}>Business hours: 10AM-10PM</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                        <Image
                                            source={require("./assets/destination.png")}
                                            style={{ width: 28, height: 38, }}
                                        />
                                        <Text style={{ color: "#2a4891", fontWeight: 'bold' }}>3.2 Km</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})