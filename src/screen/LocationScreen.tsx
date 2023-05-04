import {Button, Text, View} from "react-native";
import {memo, useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import * as Location from 'expo-location';

export const LocationScreen = memo(() => {
  const {navigate} = useNavigation();

  const [currentLocation, setCurrentLocation] = useState<Location.LocationObjectCoords>(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function getCurrentLocation() {
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }setErrorMessage('')

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    }catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])


  return (
    <View>
      {errorMessage === '' ? null : <Text>{errorMessage}</Text>}
      {currentLocation!== null ? (
        <>
          <Text>{currentLocation.heading}</Text>
          <Text>{currentLocation.accuracy}</Text>
          <Text>Speed: {currentLocation.speed}</Text>
          <Text>Lat: {currentLocation.latitude}</Text>
          <Text>Long: {currentLocation.longitude}</Text>
        </>
      ):null}
      <Button title={"title here"}/>
      <Button title={"second button"}/>
    </View>
  )
})