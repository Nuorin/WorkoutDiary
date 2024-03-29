import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ExerciseContext } from '../screensv2/ExerciseContext';
import styles from '../stylev2/styles';

const AddExerciseScreen = () => {
  const navigation = useNavigation(); 
  const { workouts, setWorkouts } = useContext(ExerciseContext);

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const toggleButton = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };
  
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleAddExercise = () => {
    if (!selectedButton || !distance || !duration || !selectedDate) {
      alert('Fill in all required fields.');
      return; 
    }

    if (parseFloat(distance) <= 0 || parseFloat(duration) <= 0) {
      alert('Distance and duration have to be positive values.');
      return;
    }
    
    const newExercise = {
      ExerciseType: selectedButton,
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      selectedDate
    };

    setWorkouts([...workouts, newExercise]);

    navigation.navigate('ExerciseHistory');

  
    setSelectedButton(null);
    setDistance('');
    setDuration('');
    setSelectedDate(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <Text style={styles.text}>Choose the exercise </Text>

        <View style={styles.buttonContainer}>
          <Button
            style={[styles.button, selectedButton === 'running' && styles.activeButton]}
            icon="run"
            mode={selectedButton === 'running' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('running')}
          >
            Running
          </Button>
          <Button
            style={[styles.button, selectedButton === 'cycling' && styles.activeButton]}
            icon="bike"
            mode={selectedButton === 'cycling' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('cycling')}
          >
            Cycling
          </Button>
          <Button
            style={[styles.button, selectedButton === 'ski' && styles.activeButton]}
            icon="ski"
            mode={selectedButton === 'ski' ? 'contained' : 'outlined'}
            onPress={() => toggleButton('ski')}
          >
            Ski
          </Button>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Distance (km)"
            value={distance}
            onChangeText={(text) => setDistance(text)}
          />
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Duration (min)"
            value={duration}
            onChangeText={(text) => setDuration(text)}
          /> 
        </View>
        <Calendar
          style={{ width: '100%' }}
          onDayPress={(day) => handleDateSelect(day)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#f2f2f2' },
          }}
        />

        <Button style={styles.addButton} mode="contained" onPress={handleAddExercise}>
          Add Exercise
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddExerciseScreen;

