import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Modal from "./components/Modal";
import AddItem from './components/AddItem';

export default function App() {
  const [textInput, setTextInput] = useState ("");
  const [itemList, setItemList] = useState([]);
  const [checkItemList, setCheckItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (t) => setTextInput(t);
  const handleAddPress = () => {

      setItemList([
        ...itemList, {
          id: Math.random().toString(),
          value: textInput,
        },

      ]);
      setTextInput("");
  };

  const handleConfirmDelete = () => {
    setItemList(itemList.filter(item => item.id !== itemSelected.id));
    setCheckItemList([
      ...checkItemList, itemList.find(item => item.id === itemSelected.id),
      
    ])
    setItemSelected({});
    setModalVisible(false);

  }
  const handleModalOpen = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }


  return (
    <View style={styles.container}>

      <AddItem handleChangeText={handleChangeText} handleAddPress={handleAddPress}/>

      <View style={styles.listContainer}>
        <FlatList
            data={itemList}
            keyExtractor={item => item.id}
            renderItem={(data) => (

              <View style={styles.listValue}>

                <Text>{data.item.value}</Text>
                <Button title="X" color="pink" onPress={() => {handleModalOpen(data.item.id)}}/>

              </View>
            )}

        />

        
        <FlatList
            data={checkItemList}
            keyExtractor={item => item.id}
            renderItem={(data) => (

              <View style={styles.lisChecktValue}>

                <Text>{data.item.value}</Text>
                <Button title="X" color="pink" onPress={() => {handleModalOpen(data.item.id)}}/>

              </View>
            )}

        />

        {modalVisible? 
          <Modal itemSelected={itemSelected} handleConfirmDelete={handleConfirmDelete}/>
           : <></>
          }
          
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: "10%"
    },
    
    listContainer: {
      marginTop: "10%",
    },
    listValue: {

      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 12,
      paddingLeft: 5,
      backgroundColor: "#EBEBEB",

    },
});
