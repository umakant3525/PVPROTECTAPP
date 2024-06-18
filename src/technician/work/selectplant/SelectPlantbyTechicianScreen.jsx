import React, { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';





const SelectPlantbyTechicianScreen = () => {
    const navigation = useNavigation();

    const plantdata = [
        { plantid: "pvplant1", plantname: "Ruturaj Plant 1", location: "Karvenagar, Pune" },
        { plantid: "pvplant2", plantname: "Ruturaj Plant 2", location: "Nanded, Pune" },
        { plantid: "pvplant3", plantname: "Ruturaj Plant 3", location: "Karvenagar, Pune" },
        { plantid: "pvplant4", plantname: "Ruturaj Plant 4", location: "Waraje, Pune" },
        { plantid: "pvplant5", plantname: "Ruturaj Plant 5", location: "Hadapsar, Pune" },
        { plantid: "pvplant11", plantname: "Ruturaj Plant 6", location: "Karvenagar, Nashik" },
        { plantid: "pvplant21", plantname: "Ruturaj Plant 7", location: "Nanded, Pune" },
        { plantid: "pvplant33", plantname: "Ruturaj Plant 8", location: "Karvenagar, Mumbai" },
        { plantid: "pvplant45", plantname: "Ruturaj Plant 9", location: "Waraje, Satara" },
        { plantid: "pvplant95", plantname: "Ruturaj Plant 10", location: "Manikarn , Kasol" }
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(plantdata);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (text) => {
        setSearch(text);
        setIsSearching(text.length > 0);
        const filteredPlants = plantdata.filter((item) => {
            return item.plantid.toLowerCase().includes(text.toLowerCase()) || item.plantname.toLowerCase().includes(text.toLowerCase()) || item.location.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filteredPlants);
    };

    const handleItemPress = (plantid) => {
        console.log(plantid);
        navigation.navigate('WorkAprovalScreen'); // Navigate to dashboard
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item.plantid)}>
            <View style={styles.itemTextContainer}>
                <Text style={styles.plantName}>{item.plantname}</Text>
                <Text style={styles.plantLocation}>{item.location}</Text>
                <Text style={styles.plantId}>{item.plantid}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" style={styles.icon} />
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
                <Feather name="search" size={24} color={isSearching ? "#00C766" : "black"} />
            </View>
            {filteredData.length === 0 ? (
                <Text style={styles.noResultsText}>404 Plant Not Found</Text>
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
        padding: wp("2%"),
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        marginVertical: hp('6%')
    },
    textinputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    textinputcontainerActive: {
        borderColor: '#00C766',
    },
    textInput: {
        flex: 1,
        marginRight: 8,
    },
    textInputActive: {
        borderColor: '#00C766',
    },
    listContainer: {
        paddingBottom: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
    },
    itemTextContainer: {
        flex: 1,
    },
    plantName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    plantLocation: {
        fontSize: 14,
        color: '#555',
    },
    plantId: {
        fontSize: 12,
        color: '#999',
    },
    icon: {
        marginLeft: 8,
    },
    noResultsText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#F9414',
    },
});

export default SelectPlantbyTechicianScreen;
