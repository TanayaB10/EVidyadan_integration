import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ThemeProvider, Card, Button } from 'react-native-elements'
import ServiceCard from './components/ServiceCardComponent'
import styles from '../util/styles'
import axios from 'axios'
import { returnServices } from '../services/Booking.service'



export class ServiceListScreen extends Component{
  static navigationOptions = {
    title: "Browse Services",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

  state = {
    //kkkkkkk
    services_list:[]
    //<ul>{this.state.services_list.map(services_list )}</ul>
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
   /* axios.get('https://evidyadaan-backend.herokuapp.com/services').then(res =>{
      const services_list = res.data;
    console.log(res);
    this.setState({services_list : res.data});
  })*/

 
}

  render(){
    const { containerRoot,inputContainer } = styles
    const theme = {
      colors:{
        primary: "#673ab7",
      },
      Icon:{
        size: 22,
        color: "#333",
      },
    }
   
    return(
      <View>
      <ServiceCard></ServiceCard>            
 
    </View>   
    );
  }

}

export default ServiceListScreen;
