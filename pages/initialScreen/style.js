import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    image: {
      flex:1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "flex-end"
    },
  
    roundButton1: {
      width: 250,
      height: 50,
      marginTop: 20,
      marginBottom: 15,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 25,
      backgroundColor: "#9400d4",
    },
  
    text1: {
  
      fontWeight: "bold",
      fontSize: 30,
      color: "#fff"
  
    },
  
    text2: {
  
      fontWeight: "bold",
      fontSize: 15,
      color: "#fff"
  
    },
  
    text3: {
  
      fontSize: 15,
      color: "#fff",
      marginBottom: 30
  
    }
  
});