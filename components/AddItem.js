import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddItem = (props) => {

    const {handleChangeText, handleAddPress, textInput} = props;
    return (
        <View style={styles.inputContainer}>
          <TextInput placeholder="Agregar Item a la Lista"
            style = {styles.input}
            onChangeText={handleChangeText}
            value={textInput}
          />
          <Button title="ADD" color="pink" onPress={handleAddPress}/>
      </View>
    );
}

const styles = StyleSheet.create ({

    inputContainer: {
        flexDirection: "row", 
        justifyContent: "space-between"
  
    },
    input: {

        borderBottomColor: "#333", 
        borderBottomWidth: 1,
        width: 200,
      },

});

export default AddItem;