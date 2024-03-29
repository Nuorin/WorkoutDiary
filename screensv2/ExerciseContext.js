import React, { createContext, useState } from 'react';

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <ExerciseContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </ExerciseContext.Provider>
  );
};
