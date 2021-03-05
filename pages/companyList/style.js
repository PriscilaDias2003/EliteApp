import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
  },
  scroll: {
    width: "100%"
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
    marginBottom: 40
    
  },
  headerContainer:{
    backgroundColor: "#212330",
    width: "100%",
    alignItems: 'center',
    height: 300,
    marginBottom: 20,
  },
  detailsButton: {
    flex: 1,
    alignSelf: "flex-end",
  },

  image: {
    width: 131,
    height: 131,
    borderRadius: 100
  },
  content: {
    flexDirection: "column",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  companyInfo: {
    borderColor: "#212330",
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 25
  },

  textCompany: {
    width: 250,
    paddingLeft: 15
  },
  companyInfoDesc: {
    paddingLeft: 25,
    width: 100,
    borderColor: "#212330",
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    height: 120
  },

  button: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    width: 280,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#25D366",
    marginTop: 20,
    height: 70
  },
  text: {
    color: "#ffff",
    fontSize: 17,
  },
  icon: {
    width: 35,
    height: 35
  },
  iconCompany: {
    width: 25,
    height: 35
  },
  bg_header:{
    width: "100%",
    height: 400,
    marginBottom: 20
  }
});
