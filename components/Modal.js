import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModalItem = (props) => {
    const {itemSelected, handleConfirmDelete} = props;

    return (
        <Modal animationType="slide">
              <View>
                <Text>
                    Eliminar
                </Text>
              </View>
              <View>
                <Text>
                    ¿Está seguro que quiere borrar?
                </Text>
              </View>
              <View>
                <Text>
                    {itemSelected.value}
                </Text>
              </View>
              <View>
                <Button title="CONFIRMAR" onPress={() => {handleConfirmDelete()}}/>
              </View>

        </Modal>
    );
}

const styles = StyleSheet.create ({

});

export default ModalItem;