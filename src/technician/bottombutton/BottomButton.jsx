import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomButton = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [activeScreen, setActiveScreen] = useState('HomeScreen');

    useEffect(() => {
        // Listen for focus change on the navigation
        if (isFocused) {
            const route = navigation.getState().routes[navigation.getState().index].name;
            setActiveScreen(route);
        }
    }, [isFocused]);

    const handlePress = (screenName) => {
        setActiveScreen(screenName);  // Update the active screen
        navigation.navigate(screenName);  // Navigate to the selected screen
    };

    const getIconColor = (screenName) => {
        return screenName === activeScreen ? '#00C766' : '#808080';  // Black for active screen, grey for others
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('HomeScreen')}>
                <MaterialIcons name="home" size={24} color={getIconColor('HomeScreen')} />
                <Text style={{ color: getIconColor('HomeScreen') }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('SelectClientScreen')}>
                <MaterialIcons name="work" size={24} color={getIconColor('SelectClientScreen')} />
                <Text style={{ color: getIconColor('SelectClientScreen') }}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('ContactsScreen')}>
                <FontAwesome name="address-book" size={24} color={getIconColor('ContactsScreen')} />
                <Text style={{ color: getIconColor('ContactsScreen') }}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('HistoryScreen')}>
                <MaterialIcons name="history" size={24} color={getIconColor('HistoryScreen')} />
                <Text style={{ color: getIconColor('HistoryScreen') }}>History</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.1,
        borderTopColor: '#555',
        paddingVertical: hp('1%'),
        backgroundColor: '#fff',  // Background color for the bottom bar
    },
    button: {
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: hp('0.5%'),
    },
});

export default BottomButton;
