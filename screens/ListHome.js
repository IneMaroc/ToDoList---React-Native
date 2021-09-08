import React, { useContext } from 'react';
import { View, StyleSheet, Button } from "react-native";
import Modal from "../components/Modal";
import ToDoListContext from '../context/ToDoListContext';
import List from '../components/list/List';


export default function ListHome ({navigation}) {

    const {modalVisible, setModalVisible, taskList} = useContext(ToDoListContext);
    return (
        <View style={styles.container}>

            <List items={taskList} home={true} navigation={navigation} />

            <View style={styles.homeButton}> 
                <Button title="+" color="pink" onPress={() => setModalVisible(true)}/>
            </View>

            {modalVisible? 
            <Modal style={styles.modalContainer} home={true} navigation={navigation}/>
            : <></>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '80%',
      padding: 30,
      marginTop: "10%",
      justifyContent: 'space-between',
    },
      
    listContainer: {
        marginTop: "10%",
        paddingBottom: '5%',
        
        
    },

    homeButton: {

        marginVertical: 'auto',

    },
 
    modalContainer: {
  
    height:'30%',
    width: '80%',
  
  },
    
  });