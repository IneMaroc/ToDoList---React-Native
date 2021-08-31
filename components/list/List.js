import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';


const List = (props) => {
const {items, checkList} = props;


    return (
        <FlatList
            data={items}
            renderItem={(data) => (

              checkList? <ListItem  data={data} checkList={checkList}/> : 
              <ListItem  data={data} checkList={checkList} />
            )}

        />
    );
}

const styles = StyleSheet.create ({
    
    

});

export default List;