import * as React from 'react'
import {View,Text,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import AppHeader from '../components/appheader'
import db from '../config.js'
import BuzzerScreen from './buzzerscreen'

export default class Homescreen extends React.Component{
  angali1Pressed(){
    var angali1 = db.ref('angali'+'/')
    angali1.update({
      'absent':'true'
    })
  }
  angali2Pressed(){
    var angali2 = db.ref('angali'+'/')
    angali2.update({
      'present':'true'
    })
  }
  rupin1Pressed(){
    var rupin1 = db.ref('rupin'+'/')
    rupin1.update({
      'absent':'true'
    })
  }
  rupin2Pressed(){
    var rupin2 = db.ref('rupin'+'/')
    rupin2.update({
      'present':'true'
    })
  }
  aish1Pressed(){
    var aish1 = db.ref('aish'+'/')
    aish1.update({
      'absent':'true'
    })
  }
  aish2Pressed(){
    var aish2 = db.ref('aish'+'/')
    aish2.update({
      'present':'true'
    })
  }

gotoBuzzerScreen = (buzzerColor) =>{
  this.props.navigation.navigate('BuzzerScreen', {color:buzzerColor});
};
render(){
  return(
    <View>
    <AppHeader/>

    <Text style = {styles.studentChartContainer}>Angali</Text>
    <Text style = {styles.studentChartContainer}>Rupin</Text>
    <Text style = {styles.studentChartContainer}>Aish</Text>

    <TouchableOpacity
    style = {styles.button}
    onPress = {() =>{
      this.angali1Pressed();
    }}>
    <Text style = {styles.buttonText}>Absent</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button}
    onPress = {() =>{
      this.rupin1Pressed();
    }}>
    <Text style = {styles.buttonText}>Absent</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button}
    onPress = {() =>{
      this.aish1Pressed();
    }}>
    <Text style = {styles.buttonText}>Absent</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button2}
    onPress = {() =>{
      this.angali2Pressed();
    }}>
    <Text style = {styles.button2Text}>Present</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button2}
    onPress = {() =>{
      this.rupin2Pressed();
    }}>
    <Text style = {styles.button2Text}>Present</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button2}
    onPress = {() =>{
      this.aish2Pressed();
    }}>
    <Text style = {styles.button2Text}>Present</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style = {styles.button3}
    onPress = {() =>{
      this.gotoBuzzerScreen('yellow')
    }}>
    <Text style = {styles.button3Text}>Submit</Text>
    </TouchableOpacity>
    </View>
  )
}
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:30,
  },
  studentChartContainer:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    margin:20,
  },
  button:{
    backgroundColor:'red',
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius :5,
    marginTop:-90,
    marginLeft:200,
    width:100,
    height:30,
  },
  buttontext:{
    textAlign:'center',
    color:'white'
  },
  button2:{
    backgroundColor:'green',
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius :5,
    marginBottom:40,
    marginLeft:-30,
    width : 100,
    height:30,
  },
  button2Text:{
    textAlign:'center',
    color:'white',
  },
  button3:{
    backgroundColor:'yellow',
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius :5,
    marginTop:90,
    marginLeft:40,
    width : 200,
    height:30,
  },
  button3Text:{
    textAlign:'center',
    color:'purple'
  }
});