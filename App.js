import React from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { ToDoListComponentContext } from './context/ToDoListContext';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ToDoNavigation from './navigation/ToDoNavigation';


export default function App() {

  const [dataLoaded] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
  if (!dataLoaded) {
    return <AppLoading />
  }
 
  return (

    <ToDoListComponentContext>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        }}>
        <ToDoNavigation/>
      </TouchableWithoutFeedback>
    </ToDoListComponentContext>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: "10%",
    justifyContent: 'center',
    
  },
  
});
