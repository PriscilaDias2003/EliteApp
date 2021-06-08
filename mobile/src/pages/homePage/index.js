import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './style';
import { Feather ,Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App({navigation}) {
  const handleBackPress = () => {

    navigation.navigate("initialScreen");

  }

  const handleNextPress = (value, icon) => {   

    navigation.navigate("companyDetail", {info: value});
    
  }
  
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={handleBackPress}
                >
                  <Feather name="arrow-left" size={36} color="#7F51CF"/>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.textStyle}>Procure uma empresa que tenha os serviços que você quer!</Text>
        </View>
      
     
      
      <View style={styles.content}>
        <View style={styles.containerCategories}>

         {
           //Group one
         }
          <View style={styles.categories}>
            <TouchableOpacity onPress={() => handleNextPress("Moda")}>  
              <View style={styles.category}>
                <Image style={styles.icon} source={require("../../../assets/roupas.png")}/>
                <Text style={styles.categoryText}>Moda</Text>

              </View>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={() => handleNextPress("Alimentos")}>
              <View style={styles.category}>
                <Ionicons style={styles.icon} name="ios-fast-food-outline" size={40}color="white" />
                <Text style={styles.categoryText}>Alimentos</Text>
              </View>
            </TouchableOpacity>

          </View>

          {
           //Group two
          }

          <View style={styles.categories}>
            <TouchableOpacity onPress={() => handleNextPress("Tecnologia")}>
              <View style={styles.category}>
                <MaterialIcons style={styles.icon} name="computer" size={40} color="white" />
                <Text style={styles.categoryText}>Tecnologia</Text>
                
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleNextPress("Estética")}>
              <View style={styles.category}>
                <Image style={styles.icon} source={require("../../../assets/maquiagem.png")}/>
                <Text style={styles.categoryText}>Estética</Text>
                
              </View>
            </TouchableOpacity>

          </View>

          {
           //Group three
          }  

          <View style={styles.categories}>
            <TouchableOpacity onPress={() => handleNextPress("Outro")}>
              <View style={styles.category}>
                <FontAwesome5 style={styles.icon} name="building" size={40} color="white" />
                <Text style={styles.categoryText}>Outro</Text>
              
              </View>
            </TouchableOpacity>

          </View>
          {
           //Categories end
          }

        </View>
        
      </View>
        
      </ScrollView>
    </View>
  );
}
