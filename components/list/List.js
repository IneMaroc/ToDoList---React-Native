import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';


const List = (props) => {
const {items, handleModalOpen, checkList, handleCheckItem, handleUnCheckItem} = props;

    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={(data) => (

              checkList? <ListItem handleModalOpen={handleModalOpen} data={data} checkList={checkList} handleUnCheckItem={handleUnCheckItem}/> : 
              <ListItem handleModalOpen={handleModalOpen} data={data} checkList={checkList} handleCheckItem={handleCheckItem}/>
            )}

        />
    );
}

const styles = StyleSheet.create ({
    
    

});

export default List;