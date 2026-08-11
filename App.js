import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 


import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import TaskCard from './components/TaskCard';

const categoriesData = [
  { 
    id: '1', 
    title: 'Exercise', 
    taskCount: 12, 
    image: require('./assets/young woman working online.png')
  },
  { 
    id: '2', 
    title: 'Study', 
    taskCount: 12, 
    image: require('./assets/young woman working at desk.png')
  },
    { 
    id: '3', 
    title: 'Internet Surfing', 
    taskCount: 12, 
    image: require('./assets/Saly-2.png')
  },
  { 
    id: '4', 
    title: 'Gifting', 
    taskCount: 12, 
    image: require('./assets/Accessories 1=3.png')
  },
    { 
    id: '5', 
    title: 'Rocket Science', 
    taskCount: 12, 
    image: require('./assets/Body 6=3.png')
  },
  { 
    id: '6', 
    title: 'Travel', 
    taskCount: 12, 
    image: require('./assets/Saly-44.png')
  },
    { 
    id: '7', 
    title: 'Robots', 
    taskCount: 12, 
    image: require('./assets/Head 5=17.png')
  },

];

const tasksData = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Finish DCIT 324 Assignment' },
  { id: '5', title: 'Prepare for Math Quiz' },
  { id: '6', title: 'Call Mom' },
  { id: '7', title: ' Read Research Paper' },
  { id: '8', title: 'Learn To Drive' },


];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          <Header />
          <SearchBar />

          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categoriesData}
            keyExtractor={(item) => item.id}
            horizontal 
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryCard
                title={item.title}
                taskCount={item.taskCount}
                image={item.image}
              />
            )}
            style={styles.categoriesList}
          />

          <Text style={styles.sectionTitle}>Ongoing Task</Text>
          <View style={styles.tasksContainer}>
            {tasksData.map((task) => (
              <TaskCard key={task.id} title={task.title} />
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F0E8', 
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  categoriesList: {
    marginBottom: 30, 
  },
  tasksContainer: {
    paddingBottom: 40, 
  },
});