import { StyleSheet, Text, View, SafeAreaView, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [hide, setHide] = useState(true)
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../components/assets/log-back.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <ScrollView>
                    <View style={styles.secContainer}>
                        <Image
                            source={require('../components/assets/logo.png')}
                            style={{ width: 150, height: 160, }}
                        />
                        <Text style={{ color: "#fff", marginTop: 25, fontSize: 22 }}>Drive you to the destination</Text>
                        <Text style={{ color: "#fff", marginTop: 15, fontSize: 25 }}>Welcome Back</Text>
                        <View style={{ marginTop: 40, width: "85%", borderBottomColor: "#fff", borderBottomWidth: 2, display: "flex", flexDirection: "row" }}>
                            <Image
                                source={require('../components/assets/phonenumber.png')}
                                style={{ width: 30, height: 30, marginRight: 15, marginTop: 4 }}
                            />
                            <TextInput
                                style={{ height: 40, fontSize: 16, color: '#fff' }}
                                placeholder="Enter your phone number"
                                placeholderTextColor="#fff"
                                onChangeText={newText => setText(newText)}
                                defaultValue={text}
                                keyboardType='numeric'

                            />
                        </View>
                        <View style={{ marginTop: 40, width: "85%", borderBottomColor: "#fff", borderBottomWidth: 2, display: "flex", flexDirection: "row" }}>
                            <Image
                                source={require('../components/assets/password.png')}
                                style={{ width: 30, height: 30, marginRight: 15, marginTop: 4 }}
                            />
                            <TextInput
                                style={{ height: 40, fontSize: 16, color: '#fff', width: "85%" }}
                                placeholder="Enter your Password"
                                placeholderTextColor="#fff"
                                onChangeText={newText => setPassword(newText)}
                                defaultValue={password}
                                secureTextEntry={hide}
                            />
                            <TouchableOpacity
                                style={{ width: 40, height: 25, position: "absolute", right: 0, zIndex: 500, top: 0 }}
                                onPress={() => {
                                    setHide(prev => !prev)
                                }}
                            >
                                <Image
                                    source={require('../components/assets/eyes.png')}
                                    style={{ width: 40, height: 25, position: "absolute", right: 0, zIndex: 500, top: 7 }}

                                />
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ width: "85%", height: 50, backgroundColor: 'rgba(255, 25, 64, 90)', borderRadius: 40, textAlign: "center", display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 100, opacity: "75%" }}>
                            <Text style={{ color: "white", fontSize: 16 }}

                            >Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 100 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}
                                onPress={() => navigation.navigate("SignUp")}
                            >New member? Click here.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}}>
                            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Forget your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-end', width: "85%", marginBottom: 15 }}>
                            <Image
                                source={require('../components/assets/languages.png')}
                                style={{ height: 40, width: 150, marginTop: 35, }}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    secContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    logo: {
        width: 150
    }
})