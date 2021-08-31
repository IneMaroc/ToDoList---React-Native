import React, { useContext } from 'react';
import { View, StyleSheet, Button } from "react-native";
import Modal from "../components/Modal";
import ToDoListContext from '../context/ToDoListContext';
import List from '../components/list/List';


export default function ListHome ({navigation}) {

    const {modalVisible, setModalVisible, list} = useContext(ToDoListContext);
    return (
        <View style={styles.container}>

            <List items={list} home={true} />

            <Button title="+" color="pink" onPress={() => setModalVisible(true)}/>

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
      height: '100%',
      padding: 30,
      marginTop: "10%",
      justifyContent: 'flex-start',
    },
      
    listContainer: {
        marginTop: "10%",
        paddingBottom: '5%',
        
        
    },
 
    modalContainer: {
  
    height:'30%',
    width: '80%',
  
  },
    
  });