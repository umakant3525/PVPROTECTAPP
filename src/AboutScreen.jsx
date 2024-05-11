import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/about/1.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.heading}>Heading For App 1</Text>
                <ScrollView style={styles.descriptionContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.description}>Heading Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos quaerat consectetur deleniti asperiores ipsum est hic cumque, itaque quia, fugiat ducimus distinctio sapiente ipsam velit quisquam illo. Eius, corrupti?</Text>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text
                    onPress={() => console.log("Get Started button pressed")}
                    style={styles.buttonText}
                >Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        paddingTop: hp('10%'),
    },
    image: {
        width: wp('100%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },
    contentContainer: {
        alignItems: 'center',
        padding: wp('3%'),
    },
    heading: {
        fontSize: wp('5%'), // Responsive text size
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descriptionContainer: {
        marginTop: hp('1%'),
        maxHeight: hp('20%'), // Responsive max height
    },
    description: {
        fontSize: wp('4%'), // Responsive text size
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: hp('10%'), // Responsive margin
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        height: hp('6%'),
        width: wp('70%'),
        borderRadius: wp('2%'), // Responsive border radius
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: wp('4%'), // Responsive text size
        fontWeight: 'bold',
        lineHeight: hp('6%'), // Responsive line height
    },
});

export default AboutScreen;
