import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    marginBottom: 15,
    height: 120, 
    justifyContent: 'center', 
    borderWidth: 1,
    borderColor: '#E8DED1', 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});