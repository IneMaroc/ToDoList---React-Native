import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, Keyboard} from 'react-native';
import Modal from "../components/Modal";
import AddItem from '../components/AddItem';
import List from '../components/list/List';

export default function ListDetails() {
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
          key: Math.random().toString(),
          value: textInput,
          checkList: false,
        },

      ]);

    } else {
      Alert.alert('Item repetido o invalido');
    }
      setTextInput("");
      Keyboard.dismiss()
  };

  const handleCheckItem = (key, value) => {
    
    setItemList(itemList.filter(item => item.key !== key));
    setCheckItemList([
    ...checkItemList, {
      key : key,
      value : value,
      checkList: true,
    },
    
    ]);
    

  };

  const handleUnCheckItem = (key, value) => {

    setCheckItemList(checkItemList.filter(item => item.key !== key));
      setItemList([
        ...itemList, {
          key: key,
          value: value,
          checkList: false,
      },
      ]);

  };

  const handleConfirmDelete = (checkList) => {

    if(checkList) {

      setCheckItemList(checkItemList.filter(item => item.key !== itemSelected.key));

    } else {

      setItemList(itemList.filter(item => item.key !== itemSelected.key));
    
    }
    
    setModalVisible(false); 
    setItemSelected({});

  };
  const handleModalOpen = (key, checkList) => {

    if(checkList) {
      setItemSelected(checkItemList.find(item => item.key === key)); 

    } else {

      setItemSelected(itemList.find(item => item.key === key));
      
    }
    setModalVisible(true);
    
  }


  return (
    <View style={styles.container}>
      

      <AddItem handleChangeText={handleChangeText} handleAddPress={handleAddPress} textInput={textInput}/>

      <View style={styles.listContainer}>

        <List items={itemList} handleModalOpen={handleModalOpen} checkList={false} handleCheckItem={handleCheckItem}/>
          
      </View>
      {checkItemList.length !== 0? 
      
        <View style={styles.checkListContainer}>

          <Text>Tareas Completadas</Text>

        <List items={checkItemList} handleModalOpen={handleModalOpen} checkList={true} handleUnCheckItem={handleUnCheckItem}/>
    
        </View>: null
      }

      {modalVisible? 
          <Modal style={styles.modalContainer} itemSelected={itemSelected} handleConfirmDelete={handleConfirmDelete}/>
           : <></>
          }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 30,
    marginTop: "10%",
    justifyContent: 'flex-start',
  },
    
  listContainer: {
      marginTop: "10%",
      paddingBottom: '5%',
      
      
  },
  checkListContainer: {
    marginTop: "10%",
    marginBottom: '10%',
    paddingTop: '5%',
    borderTopColor: '#333',
    borderTopWidth: 1,
    
    
},
modalContainer: {

  height:'30%',
  width: '80%',

},
  
});