import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from "react-native";



export default App = () => {
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
                        placeholder={"Username"} />


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
        paddingHorizontal: 16
    }

})
