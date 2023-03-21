import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";



export default App = () => {
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [question, setQuestion] = useState('');
    console.log('username: ', userName)
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
                <Image
                    source={require('./assets/images/logo.png')}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.info}>Let’s get you started</Text>
                    <Text style={styles.create} >Create an Account</Text>

                    <TextInput style={styles.input}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                        placeholder={"Username"}
                        inputMode={"text"} />

                    <TextInput style={styles.digit}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        inputMode={"numeric"}
                        placeholder={"Phone number"} />

                    <TextInput style={styles.email}
                        value={emailAddress}
                        placeholder={"Email Address"}
                        onChangeText={(text) => setEmailAddress(text)}
                        inputMode={"numeric"}
                    />

                    <TextInput style={styles.question}
                        placeholder={"What industry does your business operate in?"}
                        onChangeText={(text) => setQuestion(text)}
                        inputMode={"text"}
                        value={question}
                    />

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.button_text}
                        onPress={Alert.alert("Login in!")}
                        >Continue</Text>
                    </TouchableOpacity>
                    <Text style={styles.confirm_account} >Already have an account?
                        <Text style={styles.login_text}> Login</Text>
                    </Text>
                </View>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 23,
        paddingTop: '11%',
        paddingBottom: '9%',
    },
    image: {
        height: 48,
        width: 48,
        alignSelf: 'flex-end',
        marginEnd: 18,
    },
    scroll: {
        flexGrow: 1,
    },
    info: {
        fontSize: 24,
        color: '#263238',
        fontFamily: 'Inter-Medium',
    },
    create: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
    },
    input: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '10%',
        paddingHorizontal: 16,
    },
    digit: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '10%',
        paddingHorizontal: 16,
    },
    email: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '10%',
        paddingHorizontal: 16,
    },
    question: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '10%',
        paddingHorizontal: 16,
    },
    button: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#FFCC49',
        borderColor: '#FFCC49',
        backgroundColor: '#FFCC49',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '10%',
        paddingHorizontal: 16,
        height: 50
    },
    button_text: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#FFCC49',
        color: '#263238',
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
        paddingTop: 16
    },
    confirm_account: {
        fontSize: 12,
        color: '#1C1C1C',
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
        marginTop: '5%'
    },
    login_text: {
        fontSize: 12,
        color: '#FFCC49',
        fontFamily: 'Inter-Medium',
    },

})
