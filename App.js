import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExerciseProvider } from './screensv2/ExerciseContext';
import AddExercise from './screensv2/AddExercise';
import ExerciseHistory from './screensv2/ExerciseHistory';
import Settings from './screensv2/settings';
import { SafeAreaView } from 'react-native-safe-area-context'
import settings from './screensv2/settings';

const Stack = createStackNavigator();

const App = () => {
  return (
<ExerciseProvider>
<NavigationContainer>
  <SafeAreaView style={{ flex: 1, marginTop: 5}}>   
      <Stack.Navigator>
        <Stack.Screen name="AddExercise" component={AddExercise}/>
        <Stack.Screen name="ExerciseHistory" component={ExerciseHistory}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    </ExerciseProvider>
  );
};

export default App;
