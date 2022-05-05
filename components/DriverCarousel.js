import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'

const data = [
    {
        image: require('./assets/rikshaw.png'),
        driver: 'Ricshaw driver'
    },
    {
        image: require('./assets/car.png'),
        driver: 'Car driver'
    },
]
const { width } = Dimensions.get("window")
const height = width * 100 / 60

const DriverCarousel = () => {
    return (
        <View style={{ width: 300, height: 300, marginTop: 25, marginLeft: 10 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
            >
                {
                    data.map((item, index) =>
                        <View style={[styles.shadow, styles.elevation]} key={index}>
                            <Image
                                source={item.image}
                                key={index}
                                style={{ width: 250, resizeMode: "cover", marginRight: 25, height: 200, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                            />
                            <View style={{ position: 'absolute', backgroundColor: "#44b33e", top: 160, borderRadius: 25, marginLeft: 5 }}>
                                <Text style={{ paddingRight: 15, paddingLeft: 15, paddingTop: 2, paddingBottom: 2 }}>{item.driver}</Text>
                            </View>
                            <View style={{ width: 250, display: 'flex', flexDirection: 'row', elevation: 1, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginTop: -2, height: 95 }}>
                                <View style={{ marginTop: 5, marginLeft: 5 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Mr Marachai Kellie J</Text>
                                    <Text>English & Chinese</Text>
                                    <Image
                                        source={require('./assets/Star-rating.png')}
                                        style={{ width: 150, height: 28, marginTop: 5 }}
                                    />
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', marginRight: 5, marginTop: 15 }}>
                                    <View style={{ width: 90, height: 25, backgroundColor: '#2a4891', borderRadius: 40 }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 12, marginTop: 3 }}>Avaiable</Text>
                                    </View>
                                    <Text style={{ marginTop: 5, color: '#2a4891', fontWeight: 'bold' }}>1.50 Km</Text>
                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

export default DriverCarousel

const styles = StyleSheet.create({
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})