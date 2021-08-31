import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';


const List = (props) => {
const {items, checkList, home} = props;


    return (
        <FlatList
            data={items}
            renderItem={(data) => (

              home? <ListItem  data={data} home={home}/> : 
              <ListItem  data={data} checkList={checkList} />
            )}

        />
    );
}

const styles = StyleSheet.create ({
    
    

});

export default List;