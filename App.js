import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]= useState();
  const [taskItems, setTaskItems]= useState([]);
  const handleAddTask = () => {
    if(task==undefined) return
    if (!task.replace(/\s/g, '').length) return
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  return (
    <View style={styles.container}>
      {/*Today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go!*/}
          {
            taskItems.map((task, index) => {
             
              return <Task key={index} text={task}/>
            })
          }
        </View>
      </View>


      {/*Write a task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"?"padding":"height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor="#fff" value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    textDecorationColor: '#fff',
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor: '#2e2e2eff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    color:'#fff',
    width: 275,
    borderWidth: 1,
    borderColor: '#000000ff',
  },
  addWrapper: {
    width: 80,
    height: 50,
    backgroundColor: '#0d4ae3ff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,

    
    
  },
  addText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "bold"
  },
});
