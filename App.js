import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import CustomModal from './src/components/modal';
import Input from './src/components/input';
import ListItem from './src/components/list-item';
import { styles } from './styles';

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    setText(text);
  };

  const addItem = () => {
    if (text !== "") {
      setList((currentList) => [
        ...currentList, 
        { id: Math.random(), value: text },
      ]);
      setText("");
    }
  }

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = (id) => {
    setItemSelected(list.filter(item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
    <ListItem item={item} onHandlerModal={onHandlerModal} />
  )

  const keyExtractor = (item) => item.id.toString();


  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Input
          placeholder="Escriba una tarea"
          style={styles.input}
          placeholderTextColor="#808080"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}
          keyboardType="default"
        />
        <Button 
          title="AÑADIR"
          onPress={() => addItem()}
          color="#04d361"
        />
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />

      <CustomModal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>ELIMINAR TAREA</Text>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>¿Quieres eliminar la siguiente tarea?</Text>
          <Text style={styles.modalMessage}>{itemSelected.value}</Text>
          <Button
            title='ELIMINAR'
            onPress={() => onHandlerDelete(itemSelected.id)}
            color='#ee3a1f'
          />
        </View>
      </CustomModal>
    </View>
  );
}