import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
    city: null,
    errorMessage: null,
    loading: true, // Add loading state within locationData
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      try {
        if (status !== "granted") {
          setLocationData(prevState => ({
            ...prevState,
            errorMessage: "Permission to access location was denied by the user.",
            loading: false, // Set loading to false when permission is denied
          }));
          return;
        }
      } catch (error) {
        console.error("User not given access: ", error);
        setLocationData(prevState => ({
          ...prevState,
          errorMessage: "You haven't given access to access location.",
          loading: false, // Set loading to false on error
        }));
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        // Use reverse geocoding to get address details
        let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (addressResponse && addressResponse.length > 0) {
          const city = addressResponse[0].city;
          setLocationData({
            latitude,
            longitude,
            city,
            errorMessage: null,
            loading: false, // Set loading to false when location data is obtained
          });
        }
      } catch (error) {
        console.error("Error in getting address details: ", error);
        setLocationData(prevState => ({
          ...prevState,
          errorMessage: "Error in getting address details.",
          loading: false, // Set loading to false on error
        }));
      }
    })();
  }, []);

  return locationData;
};

export default useLocation;
