import React, { useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Modal from "../components/Modal";
import AddItem from '../components/AddItem';
import List from '../components/list/List';
import ToDoListContext from '../context/ToDoListContext';

export default function ListDetails(props) {

  const {itemList, checkItemList, modalVisible, handleSafeList} = useContext(ToDoListContext);
  const {navigation} = props;


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
          handleSafeList();
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
    justifyContent: 'space-between',
  },
    
  listContainer: {
      height: 'auto',
      marginTop: "5%",
      paddingBottom: '5%',
           
  },
  checkListContainer: {
    height: 'auto',
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

  backgroundColor: 'pink',
  padding: 5,

  
},
touchableText: {
  fontFamily: 'roboto-bold',
  textAlign: 'center',
  color: 'white',
  
}
  
});