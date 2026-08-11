import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; 

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput 
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 14,
    height: 50,
    paddingHorizontal: 15,
    marginRight: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#F0522F', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});