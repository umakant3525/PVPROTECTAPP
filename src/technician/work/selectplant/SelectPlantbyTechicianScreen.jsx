import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SelectPlantbyTechicianScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { clientId, clientName } = route.params;

    const plantdata = [
        { plantid: "pvplant1", plantname: "client1_Plant_No1", location: "Karvenagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant11", plantname: "client1_Plant_No2", location: "Ramnagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant12", plantname: "client1_Plant_No2", location: "Rajnagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant13", plantname: "client1_Plant_No2", location: "Sonked , Pune", ownerRef: "pvclient1" },
        { plantid: "pvplant14", plantname: "client1_Plant_No2", location: "Waraje, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant15", plantname: "client1_Plant_No2", location: "Hadapsar, Pune", ownerRef: "pvclient1" },
        { plantid: "pvplant16", plantname: "client1_Plant_No1", location: "Karvenagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant17", plantname: "client1_Plant_No2", location: "Ramnagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant18", plantname: "client1_Plant_No2", location: "Rajnagar, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant19", plantname: "client1_Plant_No2", location: "Sonked , Pune", ownerRef: "pvclient1" },
        { plantid: "pvplant20", plantname: "client1_Plant_No2", location: "Waraje, Pune" , ownerRef: "pvclient1"},
        { plantid: "pvplant21", plantname: "client1_Plant_No2", location: "Hadapsar, Pune", ownerRef: "pvclient1" },
        { plantid: "pvplant2", plantname: "client2_Plant_No1", location: "Nanded, Pune" , ownerRef: "pvclient2"},
        { plantid: "pvplant3", plantname: "client3_Plant_No2", location: "Karvenagar, Pune", ownerRef: "pvclient3" },
        { plantid: "pvplant4", plantname: "client4_Plant_No3", location: "Waraje, Pune" , ownerRef: "pvclient4"},
        { plantid: "pvplant5", plantname: "client5_Plant_No4", location: "Hadapsar, Pune", ownerRef: "pvclient5" },
        { plantid: "pvplant6", plantname: "client2_Plant_No5", location: "Kothrud, Pune", ownerRef: "pvclient2" },
        { plantid: "pvplant7", plantname: "client3_Plant_No6", location: "Aundh, Pune", ownerRef: "pvclient3" },
        { plantid: "pvplant8", plantname: "client4_Plant_No7", location: "Baner, Pune", ownerRef: "pvclient4" },
        { plantid: "pvplant9", plantname: "client5_Plant_No8", location: "Wakad, Pune", ownerRef: "pvclient5" },
        { plantid: "pvplant10", plantname: "client2_Plant_No9", location: "Hinjewadi, Pune", ownerRef: "pvclient2" }
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        // Filter plants based on clientId initially
        const initialFilteredPlants = plantdata.filter(item => item.ownerRef === clientId);
        setFilteredData(initialFilteredPlants);
    }, [clientId]);

    const handleSearch = (text) => {
        setSearch(text);
        setIsSearching(text.length > 0);
        const filteredPlants = plantdata.filter((item) => {
            return (
                item.ownerRef === clientId &&
                (item.plantid.toLowerCase().includes(text.toLowerCase()) ||
                 item.plantname.toLowerCase().includes(text.toLowerCase()) ||
                 item.location.toLowerCase().includes(text.toLowerCase()))
            );
        });
        setFilteredData(filteredPlants);
    };

    const handleItemPress = (plant) => {
        navigation.navigate('WorkAprovalScreen', {
            clientId: clientId,
            clientName: clientName,
            plantid: plant.plantid,
            plantname: plant.plantname,
            location: plant.location
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleItemPress(item)}>
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

export default SelectPlantbyTechicianScreen;
