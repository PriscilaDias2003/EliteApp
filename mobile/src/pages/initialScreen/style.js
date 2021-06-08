import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    image: {
      flex:1,
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "flex-end",
      
    },
    child: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
  
    roundButton1: {
      width: 300,
      height: 50,
      marginTop: 20,
      marginBottom: 15,
      justifyContent: "center",
      alignItems: "center",
      padding: 30,
      borderRadius: 50,
      backgroundColor: "#7F51CF",
    },
  
    text1: {
  
      fontWeight: "bold",
      fontSize: 25,
      color: "#fff",
      alignSelf: "flex-start",
      marginLeft: 30
  
    },
    text2: {
  
      fontWeight: "bold",
      fontSize: 15,
      color: "#fff"
  
    },
  
    text3: {
  
      fontSize: 15,
      color: "#fff",
      marginBottom: 50,
      textDecorationLine: "underline"
  
    }
  
});