import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 19,
    backgroundColor: "#1E202C",
    width: 320,
    textAlign: "left",
    fontSize: 15,
    borderRadius: 50,
    color: "#c2c2c2",
    marginTop: 10,
  },
  textStyle: {
    color: "#ffff",
    fontSize: 25,
    fontWeight: "bold",
    padding: 20,  
    marginTop: 20,

  },
  header: {
    flexDirection: "row",
    marginLeft: 20,
    paddingTop: Constants.statusBarHeight + 20,

   
  },
  content:{
    backgroundColor: "#212330",
    width: "100%",
    alignItems: 'center',
    height: 300,
  },
  detailsButton: {
    flex: 1,
    alignSelf: "flex-end",
  },

  companyList: {
    marginTop: 32,
  },
  company:{
    flexDirection: 'row',
    padding: 24,
    borderRadius: 30,
    backgroundColor: '#7F51CF',
    marginBottom: 16,
    width: 387,
    justifyContent: "space-between",
  },

  companyName: {
    fontSize: 18,
    color: "#ffff",
    fontWeight: "bold"
  },

  companyValue: {
    color: "#DEDEDE",
    width: 250
  },
  textCompany:{
    marginLeft: 10
  },

  image: {
    width: 63,
    height: 63,
    borderRadius: 50
  },
  bg_header:{
    width: "100%",
    height: 400,
    marginBottom: 20
  }

});
