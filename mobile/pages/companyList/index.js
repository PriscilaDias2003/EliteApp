import React, { useState , useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Alert , Linking , FlatList } from 'react-native';
import styles from './style';
import {Feather , FontAwesome} from '@expo/vector-icons';

export default function App({navigation}) {

  //handlers
  const handleBackPress = () => {
    navigation.navigate("companyDetail");
  }
  const handleCallPress = () => {
    Linking.openURL("tel:+5511952202923");
  }
  const handleInstagramPress = () => {
    Linking.openURL("https://instagram.com");
  }
  const handleSitePress = () => {
    Linking.openURL("https://")
  }
  const handleMapsPress = () => {
    navigation.navigate('mapScreen')
  }
  const handleWhatsAppPress = () => {
    Linking.openURL("https://wa.me/+5511952202923");
  }
  
  const image = { uri: "https://i.pinimg.com/564x/93/16/64/93166451fc4aa37d08f871fc8524adca.jpg"}

  //Interface

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        
        <ImageBackground source={require("../../assets/bg_svg.png")} style={styles.bg_header}>
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                    {
                    //botao para retornar a tela anterior
                    //Colocar no onPress a ação de navegar entre páginas
                    }
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={handleBackPress}
                >
                  <Feather name="arrow-left" size={36} color="#7F51CF"/>
                </TouchableOpacity>
            </View>
              <Image style={styles.image} source={image}/>
              <Text style={styles.textStyle}>Nome empresa</Text>
              
        </View>
      
      </ImageBackground>
      
      <View style={styles.content}>
        <TouchableOpacity style={styles.companyInfo} onPress={handleCallPress}>

          <View>
            <Feather name="phone" size={30} color="#7F51CF"/>
          </View>
          <View>
            <Text style={styles.textCompany}>55 11 0000-00000</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.companyInfo} onPress={handleInstagramPress}>
          <Feather name="instagram" size={30} color="#7F51CF"/>
          <Text style={styles.textCompany}>@empresa_insta</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.companyInfo} onPress={handleSitePress}>
          <Feather name="info" size={30} color="#7F51CF"/>
          <Text style={styles.textCompany}>www.siteempresa.com</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.companyInfo} onPress={handleMapsPress}>
          <Image style={styles.iconCompany} source={require("../../assets/vector.png")}/>
          <Text style={styles.textCompany}>www.siteempresa.com</Text>

        </TouchableOpacity>

        <View style={styles.companyInfoDesc}>
          <Feather name="align-left" size={35} color="#7F51CF"/>
          <Text style={styles.textCompany}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>

        </View>
        {
        //botao para comunicar com o whatsapp
        //Irei fazer a configuração, não precisa fazer nada aqui
        }
        <TouchableOpacity onPress={handleWhatsAppPress} style={styles.button}>
          <View>
            <Image style={styles.icon} source={require("../../assets/whatsapp.png")}/>
          </View>
         
          <View>
            <Text style={styles.text}>Entre em contato</Text>
          </View>

        </TouchableOpacity>
      </View>
        
      </ScrollView>

    </View>
  );
}