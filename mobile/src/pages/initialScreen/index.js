import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function App({navigation}) {

  const handleNextPress = () => {

    navigation.navigate("homePage");

  }

  return (

    <View style={{flex: 1}}>

      <ImageBackground source={require("../../../assets/background.png")} style={styles.image}>
        <View style={styles.child}>
      
        <Text style={styles.text1}>Bem vindo ao Elite,{"\n"}
                                   o lugar onde você{"\n"}
                                   irá encontar empresas{"\n"}
                                   para a sua necessidade</Text>

        <TouchableOpacity style={styles.roundButton1} onPress={handleNextPress}>

          <Text style={styles.text2}>Entrar</Text>

        </TouchableOpacity>

        <Text style={styles.text3} >Cadastre sua empresa</Text>
      
      
      </View>
      </ImageBackground>
    
    </View>

  );
}
