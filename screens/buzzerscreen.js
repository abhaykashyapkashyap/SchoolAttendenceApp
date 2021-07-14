import * as React from 'react'
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import {Audio} from 'expo-av'

import db from '../config.js'

class Buzzerscreen extends React.Component{
  render(){
    return(
      <TouchableOpacity
    style = {[styles.button, {backgroundColor:'this.props.color'}]}
    onPress = {() =>{
      this.props.navigation.navigate('Homescreen')
    }}>
    <Text style = {styles.buttonText}>Get Attendence</Text>
    </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button:{
    marginTop:10,
    marginLeft:80,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0,2',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:30,
    backgroundColor:'yellow',
    borderRadius:10,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20
  }
});

export default Buzzerscreen