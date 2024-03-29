import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const [selectedUnit, setSelectedUnit] = useState('km');

  return (
    <View>
      <Text>Select Unit:</Text>
      <TouchableOpacity onPress={() => setSelectedUnit('km')}>
        <Text>{selectedUnit === 'km' ? 'Kilometers' : 'Miles'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedUnit('miles')}>
        <Text>{selectedUnit === 'miles' ? 'Miles' : 'Kilometers'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
