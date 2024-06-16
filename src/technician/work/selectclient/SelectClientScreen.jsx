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

    const contactData = [
        { id: "contact1", name: "Ruturaj Deshmukh", email: "john@example.com", mobile: "7249780908", profileicon: "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" },
        { id: "contact2", name: "Umakant Shinde ", email: "umakant3525@gmail.com", mobile: "9529342940", profileicon: "https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg" },
        { id: "contact3", name: "Jineet Vishnav", email: "alice@example.com", mobile: "1112223333" },
        { id: "contact4", name: "Bob Brown", email: "bob@example.com", mobile: "4445556666" },
        { id: "contact5", name: "Charlie Davis", email: "charlie@example.com", mobile: "7778889999", profileicon : "https://cdn5.vectorstock.com/i/1000x1000/72/59/female-avatar-profile-icon-round-african-american-vector-18307259.jpg" },
        { id: "contact6", name: "David Evans", email: "david@example.com", mobile: "0001112222" },
        { id: "contact7", name: "Eve Foster", email: "eve@example.com", mobile: "3334445555" },
        { id: "contact8", name: "Frank Green", email: "frank@example.com", mobile: "6667778888" },
        { id: "contact9", name: "Grace Hill", email: "grace@example.com", mobile: "9990001111" },
        { id: "contact10", name: "Hank Irwin", email: "hank@example.com", mobile: "2223334444" }
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(contactData);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (text) => {
        setSearch(text);
        setIsSearching(text.length > 0);
        const filteredContacts = contactData.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase()) || item.email.toLowerCase().includes(text.toLowerCase()) || item.mobile.includes(text) || item.id.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filteredContacts);
    };

    const onPressContact = (id) => {
        console.log("Selected contact ID:", id);
        // Navigate to next screen with the selected contact ID
        navigation.navigate('SelectPlantbyTechicianScreen', { contactId: id });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onPressContact(item.id)} style={styles.itemContainer}>
            <View style={styles.left}>
                <Image
                    source={{ uri: item.profileicon || 'https://via.placeholder.com/50' }}
                    style={styles.profileImage}
                />
                <Text style={styles.contactId}>{item.id}</Text>
            </View>
            <View style={styles.rightitemTextContainer}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactEmail}>
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
                    placeholder='Search your contact'
                    value={search}
                    onChangeText={handleSearch}
                />
                <Feather name="search" size={wp('6%')} color={isSearching ? "#00C766" : "black"} />
            </View>
            {filteredData.length === 0 ? (
                <Text style={styles.noResultsText}>404 contact Not Found</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
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
    contactName: {
        fontSize: wp('4.5%'),
    },
    contactEmail: {
        fontWeight: 'bold',
        fontSize: wp('4%'),
        color: '#555',
        marginTop: hp('0.5%'),
    },
    contactMobile: {
        fontWeight: 'bold',
        fontSize: wp('4%'),
        color: '#555',
        marginTop: hp('0.5%'),
    },
    contactId: {
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
