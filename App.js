import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import ListDetails from './screens/ListDetails';
import ListHome from './screens/ListHome';

export default function App() {
  

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
        <ListDetails/>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 30,
    marginTop: "10%",
    justifyContent: 'center',
  },
  
});
