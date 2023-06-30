import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const lastKnownLocation = await Location.getLastKnownPositionAsync();
      if (lastKnownLocation) {
        const {
          coords: { latitude, longitude },
        } = lastKnownLocation;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
