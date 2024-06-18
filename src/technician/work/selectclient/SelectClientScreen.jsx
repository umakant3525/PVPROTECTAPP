import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomButton from '../../bottombutton/BottomButton';

const SelectClientScreen = () => {
    const navigation = useNavigation();

    const clientData = [
        { clientId: "pvclient1", clientName: "Ruturaj Deshmukh", email: "john@example.com", mobile: "7249780908", profileicon: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" },
        { clientId: "pvclient2", clientName: "Umakant Shinde ", email: "umakant3525@gmail.com", mobile: "9529342940", profileicon: "https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg" },
        { clientId: "pvclient3", clientName: "Jineet Vishnav", email: "alice@example.com", mobile: "1112223333" },
        { clientId: "pavclient4", clientName: "Bob Brown", email: "bob@example.com", mobile: "4445556666" },
        { clientId: "pvclient5", clientName: "Charlie Davis", email: "charlie@example.com", mobile: "7778889999", profileicon : "https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg" },
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(clientData);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (text) => {
        setSearch(text);
        setIsSearching(text.length > 0);
        const filteredClients = clientData.filter((item) => {
            return item.clientName.toLowerCase().includes(text.toLowerCase()) || item.email.toLowerCase().includes(text.toLowerCase()) || item.mobile.includes(text) || item.clientId.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filteredClients);
    };

    const onPressClient = (clientId, clientName) => {
        navigation.navigate('SelectPlantbyTechicianScreen', { clientId, clientName });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onPressClient(item.clientId, item.clientName)} style={styles.itemContainer}>
            <View style={styles.left}>
                <Image
                    source={{ uri: item.profileicon || 'https://via.placeholder.com/50' }}
                    style={styles.profileImage}
                />
                <Text style={styles.clientId}>{item.clientId}</Text>
            </View>
            <View style={styles.rightitemTextContainer}>
                <Text style={styles.clientName}>{item.clientName}</Text>
                <Text style={styles.clientEmail}>
                    <MaterialCommunityIcons name="email" size={wp('4%')} color="black" /> {item.email}
                </Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select Client</Text>
            <View style={[styles.textinputcontainer, isSearching && styles.textinputcontainerActive]}>
                <TextInput
                    style={[styles.textInput, isSearching && styles.textInputActive]}
                    placeholder='Search your client'
                    value={search}
                    onChangeText={handleSearch}
                />
                <Feather name="search" size={wp('6%')} color={isSearching ? "#00C766" : "black"} />
            </View>
            {filteredData.length === 0 ? (
                <Text style={styles.noResultsText}>No clients found</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.clientId}
                    contentContainerStyle={styles.listContainer}
                />
            )}
            <BottomButton />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('2%'),
        backgroundColor: '#fff'
    },
    title: {
        fontSize: wp('6%'),
        fontWeight: 'bold',
        marginTop: hp('5%'),
        textAlign: 'center',
        marginVertical: hp('2%')
    },
    textinputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: wp('2%'),
        padding: wp('2%'),
        marginBottom: hp('2%'),
    },
    textinputcontainerActive: {
        borderColor: 'gray',
    },
    textInput: {
        flex: 1,
        marginRight: wp('2%'),
        fontSize: wp('4%'),
    },
    textInputActive: {
        borderColor: 'gray',
    },
    listContainer: {
        paddingBottom: hp('2%'),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('4%'),
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: wp('2%'),
        marginBottom: hp('1%'),
        backgroundColor: '#fff',
    },
    left: {
        marginRight: wp("8%"),
    },
    profileImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        marginRight: wp('4%'),
    },
    rightitemTextContainer: {
        flex: 1,
    },
    clientName: {
        fontSize: wp('4.5%'),
    },
    clientEmail: {
        fontWeight: 'bold',
        fontSize: wp('4%'),
        color: '#555',
        marginTop: hp('0.5%'),
    },
    clientId: {
        marginTop: wp("0.8%"),
        fontSize: wp('3%'),
        color: '#999',
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: wp('4.5%'),
        color: '#F94144',
    },
});

export default SelectClientScreen;
