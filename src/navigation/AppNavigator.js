import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rootReducer from '../redux/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainScreen from '../screens/MainScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
const Stack = createNativeStackNavigator();
const store = createStore(rootReducer);

export default function NavigationStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, headerShown: false }}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}