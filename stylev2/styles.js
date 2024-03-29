import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  workoutDetails: {
     marginTop: 4,
     alignItems: 'left',
 },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:"#99C7DE",
  },

  buttonContainer: {
    flexDirection: 'row-reverse',
  },

  button: {
    marginHorizontal: 3,
    borderWidth: 3,
    borderColor: '#000000',
    borderRadius: 5,
  },

  addButton: { 
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#000000', 
    borderRadius: 2,
    width: '60%',
  
  },

  inputContainer: {
    width: '85%',
    marginTop: 20,
    marginBottom: 40
  },

  textInput: {
    height: 47,
    borderColor: '#000000', 
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 37,
    marginBottom: 21,
    marginTop: 15,
    color: '#000000', 
    fontFamily: 'Arial',
  },


});
