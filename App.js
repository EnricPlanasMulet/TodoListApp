import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native';
import Task from './components/Task';
import * as Haptics from 'expo-haptics';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task == undefined) return
    if (!task.replace(/\s/g, '').length) return
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Keyboard.dismiss();
    setTaskItems([task, ...taskItems]);
    setTask(null);
  }

  const completeTask = (index) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
      {/*Today's tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/*Write a task*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} keyboardAppearance='dark' placeholder={'Write a task'} placeholderTextColor="#808080ff" value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        {/*This is where the tasks will go!*/}
        <SafeAreaView style={styles.items}>
          <ScrollView automaticallyAdjustContentInsets="true" centerContent="false" showsVerticalScrollIndicator="false">
            {
              taskItems.map((task, index) => {
                return (<TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={task} />
                </TouchableOpacity>)
              })
            }
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },
  items: {
    height: '82%',
    marginTop: 5,

  },
  writeTaskWrapper: {
    marginTop: 10,
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    textDecorationColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#2e2e2eff',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    color: '#fff',
    width: 275,
    borderWidth: 2,
    borderColor: '#000000ff',
    marginRight: 30,
  },
  addWrapper: {
    width: 80,
    height: 50,
    backgroundColor: '#0d4ae3ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    marginRight: 5,

  },
  addText: {
    color: '#91aef9ff',
    fontSize: 25,
    fontWeight: "bold"
  },
});
