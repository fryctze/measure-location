import {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {rootNavigation} from "./RootNavigation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import {LocationScreen} from "../screen/LocationScreen";

const Stack = createNativeStackNavigator()
const AppContainer = () => {
  return (
    <NavigationContainer ref={rootNavigation}>
      <View style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={"LocationScreen"}>
          <Stack.Screen name="LocationScreen" component={LocationScreen}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default AppContainer