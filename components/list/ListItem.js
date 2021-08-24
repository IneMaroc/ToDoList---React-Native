import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ListItem = (props) => {
    const{data, handleModalOpen, checkList, handleCheckItem, handleUnCheckItem} = props;

    

        return (
        <View style={checkList? styles.listChecktValue : styles.listValue}>
                <Button icon="check" color="#333" onPress={() => {
                    if(checkList) {

                        
                        handleUnCheckItem(data.item.id, data.item.value);

                    } else {
                        
                        handleCheckItem(data.item.id, data.item.value);

                    }
                    
                    
                }}/>
                <Text style={checkList? styles.textChecktValue : styles.textValue}>{data.item.value}</Text>
                <Button title="X" color="pink" onPress={() => {handleModalOpen(data.item.id, checkList)}}/>

        </View>
    );
}

const styles = StyleSheet.create ({

    listValue: {

        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        paddingLeft: 5,
        backgroundColor: "#EBEBEB",
  
    },
    
    listChecktValue: {
        backgroundColor: '#EBEBEB',
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
        paddingLeft: 5,
        

    },
    textChecktValue: {
        color: 'white' ,
    }

});

export default ListItem;