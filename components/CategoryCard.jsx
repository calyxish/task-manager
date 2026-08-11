import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CategoryCard({ title, taskCount, image }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.taskCount}>{taskCount} Tasks</Text>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    width: 180, // Fixed width so they scroll nicely
    height: 230,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  taskCount: {
    fontSize: 12,
    color: '#4A4A4A',
    marginTop: 2,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130, // Adjust this based on your actual Figma exports
    alignSelf: 'center',
  },
});