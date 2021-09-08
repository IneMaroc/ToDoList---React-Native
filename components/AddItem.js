import React, { useContext } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import ToDoListContext from '../context/ToDoListContext';

const AddItem = (props) => {
  
    const {home, navigation} = props;
    const {handleChangeText, handleAddPress, textInput} = useContext(ToDoListContext);
    return (

      
        <View >
          {home? 
            <View style={styles.inputHomeContainer}>  
              <TextInput placeholder="Ingrese Nombre de la Lista"
                
                style = {styles.inputHome}
                onChangeText={handleChangeText}
                value={textInput}
              />
              <Button title="Nueva Lista" color="pink" onPress={() => {
                handleAddPress(home);
                navigation.navigate('Details', {
                  categoryKey: Math.random().toString(),
                  name: textInput,
                });
              
              
              }}/>
            </View>
           :<View style={styles.inputContainer}>  
              <TextInput placeholder="Agregar Item a la Lista"
                style = {styles.input}
                onChangeText={handleChangeText}
                value={textInput}
              />
              <Button title="ADD" color="pink" onPress={() => {

                let aux = false;
                handleAddPress(aux);
              
              }}/>
            </View>}
          
      </View>
    );
}

const styles = StyleSheet.create ({

    inputContainer: {
        flexDirection: "row", 
        justifyContent: "space-between"
  
    },
    inputHomeContainer: {
      maxWidth: '80%',
      padding: 20,
      borderRadius: 5,
      backgroundColor: '#333',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: '50%',

    },
    input: {
        borderBottomColor: "#333", 
        borderBottomWidth: 1,
        width: 200,
        paddingLeft: 5,
        fontFamily: 'roboto',
      },
    inputHome: {
      fontSize: 14,
      color: '#333',
      padding: 5,
      marginBottom: 10,
      backgroundColor: 'white',
      textDecorationLine: 'underline',
      textDecorationStyle: "solid",
      fontFamily: 'roboto-bold',
    },

});

export default AddItem;