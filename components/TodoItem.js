import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={styles.todoitem}>
      <TouchableOpacity
        onPress={() => toggleCompleted(task.id)}
        style={{
          width: 20,
          height: 20,
          borderRadius: 3,
          borderWidth: 2,
          borderColor: task.completed ? '#4CAF50' : '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {task.completed && (
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: '#4CAF50',
            }}
          />
        )}
      </TouchableOpacity>
      <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deletebutton}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}
