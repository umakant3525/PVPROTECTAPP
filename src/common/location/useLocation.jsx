import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [locationData, setLocationData] = useState({
    latitude: null,
    longitude: null,
    city: null,
    errorMessage: null,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationData(prevState => ({
          ...prevState,
          errorMessage: "Permission to access location was denied by the user."
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
          setLocationData({ latitude, longitude, city, errorMessage: null });
        }
      } catch (error) {
        console.error("Error fetching location: ", error);
        setLocationData(prevState => ({
          ...prevState,
          errorMessage: "Error fetching location."
        }));
      }
    })();
  }, []);

  return locationData;
};

export default useLocation;
