import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ThemeProvider, Card, Button } from 'react-native-elements'
import axios from 'axios'

export class ServiceCardComponent extends Component{
  static navigationOptions = {
    title: "Browse Services",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

  state = {
    serviceList :[]

  }

  constructor(props){
    super(props);
  }

  componentDidMount(){}

  render(){
    const {navigation} = this.props;
    //const data = navigation.getParam('selectedListItem', 'NO-ID');
    axios.get('https://evidyadaan-backend.herokuapp.com/services').then(res =>{

       serviceList=res.data;
       this.setState({serviceList:res.data});
  })
   // const name= services_list.map((data)=>data.name);
    
    /* [
      //This list will be feteched by api
      {
        subject: 'English',
        class: '5th',
        day: 'Sat,Sun',
        time: '9:00 am - 10:30 am'
      }, 
      {
        subject: 'Hindi',
        class: '4th',
        day: 'Sat,Sun,Wed',
        time: '9:00 am - 10:30 am'
      }, 
      {
        subject: 'Science',
        class: '5th',
        day: 'Fri,Sat',
        time: '9:00 am - 10:30 am'
      }, 
    ]*/
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
      <ThemeProvider theme={theme}>
        <ScrollView >
         {
          this.state.serviceList.map((l, i) => (
            <Card key = {i} title = {l.name} containerStyle = {{borderRadius: 6, marginBottom:10}}>
              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Available for:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.id}
                </Text>
              </View>
              
              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Day:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.duration}
                </Text>
              </View>

              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Time:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.category}
                </Text>
              </View>
              
              <Button
                title = "Request"
                type = 'outline'
              />
            </Card>
          ))
         }
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default ServiceCardComponent;
