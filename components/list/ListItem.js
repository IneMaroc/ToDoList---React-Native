import React, { useContext } from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import ToDoListContext from '../../context/ToDoListContext';

const ListItem = (props) => {
    const{data, checkList, home, navigation} = props;
    const {handleCheckItem, handleUnCheckItem, handleModalOpen} = useContext(ToDoListContext);

        return (
        <View >
                {home? 

                <TouchableOpacity onPress={() => {
                    
                    navigation.navigate('Details', {
                      categoryKey: data.item.key,
                      name: data.item.value,
                    });

                    return data, home
                  
                  
                  }}><Text>{data.item.value}</Text></TouchableOpacity>
                
                : 

                <View style={checkList? styles.listChecktValue : styles.listValue}>
                    <Button title={checkList? 'OK' : '  '} color="#333" onPress={() => {
                        if(checkList) {

                            
                            handleUnCheckItem(data.item.key, data.item.value);

                        } else {
                            
                            handleCheckItem(data.item.key, data.item.value);

                        }
                        
                        
                    }}/>
                    <Text style={checkList? styles.textChecktValue : styles.textValue}>{data.item.value}</Text>
                    <Button title="X" color="pink" onPress={() => {handleModalOpen(data.item.key, checkList)}}/>
                </View>
                
                }
                

                

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
    textValue: {

        width: '80%',
        fontFamily: 'roboto',

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
        width: '80%',
        textDecorationLine: 'line-through',
        fontFamily: 'roboto',
    }

});

export default ListItem;