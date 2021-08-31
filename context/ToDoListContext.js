import React, { createContext, useState } from 'react';
import { Alert, Keyboard} from 'react-native';
import List from '../components/list/List';

const ToDoListContext = createContext();

export default ToDoListContext;

export const ToDoListComponentContext = ({children}) => {

    const [textInput, setTextInput] = useState ('');
    const [itemList, setItemList] = useState([]);
    const [checkItemList, setCheckItemList] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [titleInput, setTitleInput] = useState('');
  
    const handleChangeText = (t) => setTextInput((t).toLowerCase());

    const handleModalOpen = (key, checkList) => {
  
      if(checkList) {
        setItemSelected(checkItemList.find(item => item.key === key)); 
  
      } else {
  
        setItemSelected(itemList.find(item => item.key === key));
        
      }
      setModalVisible(true);
      
    }


    const handleAddPress = (home) => {
      
      if (home) {
        let titInput = taskList.find(item => item.value === textInput);
        if (titInput === undefined && textInput !== '') {
          setTitleInput(textInput);
          setModalVisible(false);
        } else {
          Alert.alert('La lista ya existe o es invalida');
        }

      }else {

        let unCheckItems = itemList.find(item => item.value === textInput);
        let checkItems = checkItemList.find(item => item.value === textInput);
        if (unCheckItems === undefined && checkItems === undefined && textInput !== '') {
    
          setItemList([
            ...itemList, {
              key: Math.random().toString(),
              value: textInput,
              checkList: false,
            },
    
          ]);
    
        } else {
          Alert.alert('Item repetido o invalido');
        }

      }
      
        setTextInput("");
        Keyboard.dismiss()
    };
  
    const handleCheckItem = (key, value) => {
      
      setItemList(itemList.filter(item => item.key !== key));
      setCheckItemList([
      ...checkItemList, {
        key : key,
        value : value,
        checkList: true,
      },
      
      ]);
      
  
    };
  
    const handleUnCheckItem = (key, value) => {
  
      setCheckItemList(checkItemList.filter(item => item.key !== key));
        setItemList([
          ...itemList, {
            key: key,
            value: value,
            checkList: false,
        },
        ]);
  
    };

    const handleSafeList = () => {

      setTaskList([

        ...taskList, {
          itemList: itemList,
          checkItemList: checkItemList,
          value: titleInput,
          key: Math.random().toString(),

        }

      ]);

      setTitleInput('');
      setItemList([]);
      setCheckItemList([]);

    }

  
    const handleConfirmDelete = (checkList) => {
  
      if(checkList) {
  
        setCheckItemList(checkItemList.filter(item => item.key !== itemSelected.key));
  
      } else {
  
        setItemList(itemList.filter(item => item.key !== itemSelected.key));
      
      }
      
      setModalVisible(false); 
      setItemSelected({});
  
    };
    
  
    
    
    return <ToDoListContext.Provider value={{textInput, setTextInput,
    itemList, setItemList,
    checkItemList, setCheckItemList,
    itemSelected, setItemSelected,
    modalVisible, setModalVisible,
    titleInput, setTitleInput,
    taskList, setTaskList,
    handleModalOpen,
    handleConfirmDelete,
    handleUnCheckItem,
    handleCheckItem,
    handleAddPress,
    handleChangeText,
    handleSafeList
     }}>{children}</ToDoListContext.Provider>
};