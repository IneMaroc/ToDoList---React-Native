import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModalItem = (props) => {
    const {itemSelected, handleConfirmDelete, checkList} = props;

    return (
        <Modal animationType="slide"  style={styles.modal}>
          <View style={styles.modalContent}>
              <View style={styles.modalMessage}>
                <Text>
                    ¿Está seguro que quiere borrar?
                </Text>
              </View>
              <View style={styles.modalTitle}>
                <Text> 
                    {(itemSelected.value).toUpperCase()}
                </Text>
              </View>
              <View>
                <Button title="CONFIRMAR" color='pink' onPress={() => {handleConfirmDelete(checkList)}}/>
              </View>
          </View>

        </Modal>
    );
}

const styles = StyleSheet.create ({
  modal: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-arround',
    

  }, 
  
  modalContent: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
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