import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import Modal from "./components/Modal";
import AddItem from './components/AddItem';
import List from './components/List/List';

export default function App() {
  const [textInput, setTextInput] = useState ("");
  const [itemList, setItemList] = useState([]);
  const [checkItemList, setCheckItemList] = useState([]);
  

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (t) => setTextInput((t).toLowerCase());
  const handleAddPress = () => {

    let unCheckItems = itemList.find(item => item.value === textInput);
    let checkItems = checkItemList.find(item => item.value === textInput);
    if ((unCheckItems && checkItems) === undefined && textInput !== '') {

      setItemList([
        ...itemList, {
          id: Math.random().toString(),
          value: textInput,
        },

      ]);

    } else {
      Alert.alert('Item repetido o invalido');
    }
      setTextInput("");
  };

  const handleCheckItem = (id, value) => {
    
    setItemList(itemList.filter(item => item.id !== id));
    setCheckItemList([
    ...checkItemList, {
      value : value,
      id : id,
    },
    
    ]);
    

  };

  const handleUnCheckItem = (id, value) => {

    setCheckItemList(checkItemList.filter(item => item.id !== id));
      setItemList([
        ...itemList, {
          id: id,
          value: value,
      },
      ]);

  };

  const handleConfirmDelete = (checkList) => {

    if(checkList) {

      setCheckItemList(checkItemList.filter(item => item.id !== itemSelected.id));

    } else {

      setItemList(itemList.filter(item => item.id !== itemSelected.id));
    
    }
    
    setModalVisible(false); 
    setItemSelected({});

  };
  const handleModalOpen = (id, checkList) => {

    if(checkList) {
      setItemSelected(checkItemList.find(item => item.id === id)); 

    } else {

      setItemSelected(itemList.find(item => item.id === id));
      
    }
    setModalVisible(true);
    
  }


  return (
    <View style={styles.container}>
      

      <AddItem handleChangeText={handleChangeText} handleAddPress={handleAddPress} textInput={textInput}/>

      <View style={styles.listContainer}>

        <List items={itemList} handleModalOpen={handleModalOpen} checkList={false} handleCheckItem={handleCheckItem}/>
          
      </View>

      <View style={styles.checkListContainer}>

        <List items={checkItemList} handleModalOpen={handleModalOpen} checkList={true} handleUnCheckItem={handleUnCheckItem}/>
          
      </View>

      {modalVisible? 
          <Modal itemSelected={itemSelected} handleConfirmDelete={handleConfirmDelete}/>
           : <></>
          }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: "10%",
    justifyContent: 'center',
  },
    
  listContainer: {
      marginTop: "10%",
      paddingBottom: '10%',
      borderBottomColor: '#333',
      borderBottomWidth: 1,
      
  },
  checkListContainer: {
    marginTop: "10%",
    marginBottom: '10%',
    
    
},
  
});
