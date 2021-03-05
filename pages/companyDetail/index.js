import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import styles from './style';
import {Feather} from '@expo/vector-icons';

export default function App({navigation}) {

  const fakeData = [
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    },
    {
      nomeEmpresa: "Nome empresa",
      description: "Lorem Ipsum is simply dummy text of the printing and typeset" 
    }
  ];

  const handleBackPress = () => {

    navigation.navigate("homePage");
    
  }

  const handleNextPress = () => {

    navigation.navigate("companyList");
    
  }

  const [value, setValue] = React.useState("Pesquisar")
  
  const onFocus = () => {

    setValue({value: ""})

  }

  const image = { uri: "https://i.pinimg.com/564x/93/16/64/93166451fc4aa37d08f871fc8524adca.jpg"}
  
  return (

    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg_svg.png")} style={styles.bg_header}>
        <View style={styles.content}>
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
                  <Text style={styles.textStyle}>Categoria escolhida</Text>
                  <TextInput 
                    style={styles.input}
                    onFocus={onFocus}
                    value={value}
                  />
            </View>
          </View>
        
      </ImageBackground>
      
      
      <FlatList 
          data={fakeData}
          style={styles.companyList}
          showsVerticalScrollIndicator = {false}
          renderItem={( {item } ) => (

            //botao para abrir a tela de informação da empresa
            //Colocar no onPress a ação de navegar entre páginas
            <TouchableOpacity onPress={handleNextPress}>
              <View style={styles.company}> 
                  
                    <View>
                      <Image style={styles.image} source={image} />
                    </View>
                    <View style={styles.textCompany}>
                      <Text style={styles.companyName}>{item.nomeEmpresa}</Text>
                      <Text style={styles.companyValue}>{item.description}</Text>
                    </View>
                    
                
              </View>
            </TouchableOpacity>

          )}

          keyExtractor={(item, index) => index.toString()}
    
      />
    </View>
  );
}
