import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListDetails from '../screens/ListDetails';
import ListHome from '../screens/ListHome';

const Stack = createNativeStackNavigator();

export default function ToDoNavigation () {

  

  return (


        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Home' component={ListHome} options={{title: 'To Do Lists'}}/>
              <Stack.Screen name='Details' component={ListDetails} options={{title: 'List Details'}}/>
          </Stack.Navigator>
        </NavigationContainer>
   
  );
}
