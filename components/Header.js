import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: 40, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Image
                    source={require('./assets/menu.png')}
                    style={{ height: 30, width: 25, marginLeft: 10 }}
                />
                <Image
                    source={require('./assets/EVERGO.png')}
                />
                <Image
                    source={require('./assets/notification.png')}
                    style={{ height: 28, width: 30, marginRight: 12 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})