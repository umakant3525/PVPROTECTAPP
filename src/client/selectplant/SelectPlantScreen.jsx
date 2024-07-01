import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SelectPlantScreen = () => {
    const navigation = useNavigation();

    const plantData = [
        { plantid: "pvplant1", plantname: "Ruturaj Plant 1", location: "Karvenagar, Pune" },
        { plantid: "pvplant2", plantname: "Ruturaj Plant 2", location: "Nanded, Pune" },
        { plantid: "pvplant3", plantname: "Ruturaj Plant 3", location: "Karvenagar, Pune" },
        { plantid: "pvplant4", plantname: "Ruturaj Plant 4", location: "Waraje, Pune" },
        { plantid: "pvplant5", plantname: "Ruturaj Plant 5", location: "Hadapsar, Pune" },
        { plantid: "pvplant11", plantname: "Ruturaj Plant 6", location: "Karvenagar, Nashik" },
        { plantid: "pvplant21", plantname: "Ruturaj Plant 7", location: "Nanded, Pune" },
        { plantid: "pvplant33", plantname: "Ruturaj Plant 8", location: "Karvenagar, Mumbai" },
        { plantid: "pvplant45", plantname: "Ruturaj Plant 9", location: "Waraje, Satara" },
        { plantid: "pvplant95", plantname: "Ruturaj Plant 10", location: "Manikarn, Kasol" }
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(plantData);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (text) => {
        setSearch(text);
        setIsSearching(text.length > 0);
        const filteredPlants = plantData.filter((item) => {
            return item.plantid.toLowerCase().includes(text.toLowerCase()) || 
                   item.plantname.toLowerCase().includes(text.toLowerCase()) || 
                   item.location.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filteredPlants);
    };

    const handleItemPress = (plantid) => {
        console.log(plantid);
        navigation.navigate('ClientDashboardScreen');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item.plantid)}>
            <MaterialCommunityIcons
                name="solar-panel-large"
                size={wp("10%")}
                color="#fbc02d"
                style={styles.icon}
            />
            <View style={styles.itemTextContainer}>
                <Text style={styles.plantName}>{item.plantname}</Text>
                <Text style={styles.plantLocation}>{item.location}</Text>
                <Text style={styles.plantId}>{item.plantid}</Text>
            </View>
            <Ionicons name="chevron-forward" size={wp('6%')} color="black" style={styles.icon} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select Plant</Text>
            <View style={[styles.textinputcontainer, isSearching && styles.textinputcontainerActive]}>
                <TextInput
                    style={[styles.textInput, isSearching && styles.textInputActive]}
                    placeholder='Search your plant'
                    value={search}
                    onChangeText={handleSearch}
                />
                <Feather name="search" size={wp('6%')} color={isSearching ? "#00C766" : "black"} />
            </View>
            {filteredData.length === 0 ? (
                <Text style={styles.noResultsText}>No plants found for this client</Text>
            ) : (
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.plantid}
                    contentContainerStyle={styles.listContainer}
                />
            )}
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
        fontSize: hp('3%'),
        fontWeight: 'bold',
        marginTop: hp('5%'),
        marginBottom: hp('2%'),
        textAlign: 'center',
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
        justifyContent: 'space-between',
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
    itemTextContainer: {
        marginLeft: wp("4%"),
        flex: 1,
    },
    plantName: {
        fontSize: wp('4.5%'),
    },
    plantLocation: {
        fontSize: wp('3.5%'),
        color: '#555',
    },
    plantId: {
        fontSize: wp('3%'),
        color: '#999',
    },
    icon: {
        marginLeft: 8,
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: wp('4.5%'),
        color: '#F94144',
    },
});

export default SelectPlantScreen;
