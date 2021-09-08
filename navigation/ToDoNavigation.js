import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListDetails from '../screens/ListDetails';
import ListHome from '../screens/ListHome';

const Stack = createNativeStackNavigator();

export default function ToDoNavigation () {

  

  return (


        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Platform.OS === 'android'? 'pink' : ''
            },
            headerTintColor: Platform.OS === 'android'? 'white' : '',
            headerTitleStyle: {
              fontWeight:'bold',
            }

          }}>
              <Stack.Screen name='Home' component={ListHome} options={{title: 'To Do Lists'}}/>
              <Stack.Screen name='Details' component={ListDetails} options={({ route }) => ({
                title: route.params.name,
              })}/>
          </Stack.Navigator>
        </NavigationContainer>
   
  );
}
