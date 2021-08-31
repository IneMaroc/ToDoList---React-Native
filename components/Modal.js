import React, { useContext } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import ToDoListContext from '../context/ToDoListContext';
import AddItem from './AddItem';

const ModalItem = (props) => {
    const {home, navigation} = props;
    const {itemSelected, handleConfirmDelete} = useContext(ToDoListContext);

    return (

              
        <Modal animationType="fade"  style={styles.modal} transparent>
          {home? <AddItem home={home} style={styles.modalContent} navigation={navigation}/> :
          <View style={styles.modalContent}>
            <View>
              <Text style={styles.modalMessage}>
                  ¿Está seguro que quiere borrar?
              </Text>
            </View>
            <View>
              <Text style={styles.modalTitle}> 
                  {(itemSelected.value).toUpperCase()}
              </Text>
            </View>
            <View>
              <Button title="CONFIRMAR" color='pink' onPress={() => {handleConfirmDelete(itemSelected.checkList)}}/>
            </View>
          </View>
       }
        </Modal>
    );
}

const styles = StyleSheet.create ({
  modal: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    height:'30%',
    width: '80%',
    

  }, 
  
  modalContent: {
    maxWidth: '80%',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#333',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  modalMessage: {
    fontSize: 14,
    color: 'white',
  },
  modalTitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    color: 'white',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }

});

export default ModalItem;