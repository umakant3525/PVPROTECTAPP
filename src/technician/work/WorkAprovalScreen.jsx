import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation, useRoute } from '@react-navigation/native';
import RuleBox from "../home/RuleBox";

const WorkAprovalScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { clientId, clientName, plantid, plantname, location } = route.params;

    const [isChecked, setIsChecked] = useState(false);

    const selectedData = {
        plantid: plantid,
        plantname: plantname,
        clientid: clientId,
        clientname: clientName,
        plantlocation: location,
    };

    const gositevisitScreen = () => {
        if (isChecked) {
            navigation.navigate('SafetyFormScreen'); // Navigate to SafetyFormScreen after site visit
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <Text style={styles.title}>Selected Information</Text>
                    <View style={styles.infoBox}>
                        <InfoItem
                            iconName="solar-panel-large"
                            iconColor="#fbc02d"
                            label={`Plant ID: ${selectedData.plantid}`}
                        />
                        <InfoItem
                            iconName="solar-panel"
                            iconColor="#fbc02d"
                            label={`Plant Name: ${selectedData.plantname}`}
                        />
                        <InfoItem
                            iconName="account-box"
                            iconColor="#ff8a65"
                            label={`Client ID: ${selectedData.clientid}`}
                        />
                        <InfoItem
                            iconName="account"
                            iconColor="#ff8a65"
                            label={`Client Name: ${selectedData.clientname}`}
                        />
                        <InfoItem
                            iconName="map-marker"
                            iconColor="#F94144"
                            label={`Location: ${selectedData.plantlocation}`}
                        />
                    </View>
                </View>

                <RuleBox />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, { opacity: isChecked ? 1 : 0.5 }]}
                        onPress={gositevisitScreen}
                        disabled={!isChecked}
                    >
                        <Text style={styles.buttonText}>Site Visit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                        checkedIcon={<Icon name="check-square" type="font-awesome" color="#00C766" />}
                        uncheckedIcon={<Icon name="square-o" type="font-awesome" />}
                        containerStyle={styles.checkbox}
                    />
                    <Text style={[styles.checkboxText, isChecked && { color: '#00C766' }]}>
                        Are you following all instructions mentioned above?
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const InfoItem = ({ iconName, iconColor, label }) => (
    <View style={styles.infoItem}>
        <MaterialCommunityIcons
            name={iconName}
            size={wp("4%")}
            color={iconColor}
            style={styles.icon}
        />
        <Text style={styles.infoText}>
            {label}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: wp("5%"),
        backgroundColor: "#fff",
    },
    title: {
        fontSize: wp("6%"),
        fontWeight: "bold",
        marginTop: hp("5%"),
        textAlign: "center",
        marginVertical: hp("2%"),
    },
    infoBox: {
        paddingVertical: hp("1%"),
        paddingHorizontal: wp("6%"),
        borderRadius: wp("2%"),
        borderWidth: 1,
        borderColor: "#33333359",
        marginBottom: hp("1%"),
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp("0.5%"),
    },
    infoText: {
        fontSize: wp("3.5%"),
        fontWeight : "bold"
    },
    buttonContainer: {
        marginVertical: hp('2%'),
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        height: hp('6%'),
        width: wp('80%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: wp("4%"),
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
    },
    checkbox: {
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0,
    },
    checkboxText: {
        marginLeft: wp("3%"),
        fontSize: wp("4%"),
    },
    icon: {
        marginRight: wp("3%"),
    },
});

export default WorkAprovalScreen;
