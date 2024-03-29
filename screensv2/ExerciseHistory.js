import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ExerciseContext } from '../screensv2/ExerciseContext';
import styles from '../stylev2/styles'; // Import your style.js file

const ExerciseHistory = () => {
  const { workouts } = useContext(ExerciseContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 10 }]}>Exercise History</Text>
      {workouts.length === 0 ? (
        <Text>No exercises recorded yet.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.workoutDetails}>Exercise Type: {item.ExerciseType}</Text>
              <Text style={styles.workoutDetails}>Distance: {item.distance} km</Text>
              <Text style={styles.workoutDetails}>Duration: {item.duration} min</Text>
              <Text style={styles.workoutDetails}>Date: {item.selectedDate}</Text>
              <View style={styles.workouts} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ExerciseHistory;
