import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomButton = () => {
    const navigation = useNavigation();

    const handlePress = (screenName) => {
        navigation.navigate(screenName);  // Navigate to the selected screen
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('HomeScreen')}>
                <MaterialIcons name="home" size={24} color="#808080" />
                <Text style={{ color: '#808080' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('WorkScreen')}>
                <MaterialIcons name="work" size={24} color="#808080" />
                <Text style={{ color: '#808080' }}>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('ContactsScreen')}>
                <FontAwesome name="address-book" size={24} color="#808080" />
                <Text style={{ color: '#808080' }}>Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('HistoryScreen')}>
                <MaterialIcons name="history" size={24} color="#808080" />
                <Text style={{ color: '#808080' }}>History</Text>
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
        backgroundColor: '#ffff',  // Background color for the bottom bar
    },
    button: {
        alignItems: 'center',
        flexGrow: 1,
        paddingVertical: hp('0.5%'),
    },
});

export default BottomButton;
