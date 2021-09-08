import React, { useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from "../components/Modal";
import AddItem from '../components/AddItem';
import List from '../components/list/List';
import ToDoListContext from '../context/ToDoListContext';

export default function ListDetails(props) {

  const {taskList, itemList, checkItemList, modalVisible, handleSaveList} = useContext(ToDoListContext);
  const {home, navigation} = props;


  return (
    <View style={styles.container}>
      

      <AddItem  home={false}/>

      <View style={styles.listContainer}>

        <List items={itemList}  checkList={false} />
          
      </View>
      {checkItemList.length !== 0? 
      
        <View style={styles.checkListContainer}>

          <Text>Tareas Completadas</Text>

          <List items={checkItemList}  checkList={true} />
    
        </View>: null
      }

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          handleSaveList();
          navigation.navigate('Home');
        
        
        }}>
      
        <Text style={styles.touchableText} >GUARDAR LISTA</Text>
      </TouchableOpacity>

      {modalVisible? 
          <Modal style={styles.modalContainer} home={false}/>
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
    marginTop: "1%",
    justifyContent: 'flex-start',
  },
    
  listContainer: {
      height: '45%',
      marginTop: "5%",
      paddingBottom: '5%',
           
  },
  checkListContainer: {
    height: '45%',
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
touchable: {

  flex: 0.1,
  backgroundColor: 'pink',
  padding: 5,
  position: 'absolute', 
  left: 0, 
  right: 0, 
  bottom: 0
  
},
touchableText: {
  fontFamily: 'roboto-bold',
  textAlign: 'center',
  color: 'white',
  
}
  
});