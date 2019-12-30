import React, { Component } from "react";
import { Text, View, StyleSheet,ScrollView } from "react-native";
import { Button, Header } from "react-native-elements";
import { render } from "react-dom";
import axios from 'axios';
import ServiceCard from '../screens/components/ServiceCardComponent';
import { returnServices } from "../services/Service.service";



export class BrowseServices extends Component {

    state={      
       name:'',
        services_list : []      

    };

    constructor(props) {
        super(props);
      //  this.state = {}
    }

    componentDidMount(){
        //axios.get('https://evidyadaan-backend.herokuapp.com/services')
        returnServices().then(res =>{

         services_list=res.data;
       const name= services_list.map((data)=>data.name);
       
       // console.log("Name=========",name);
        this.setState({services_list : res.data});
              
      })
    }    

    render() {
        return (
           
                <View>
                    <ServiceCard></ServiceCard>            
               
             </View>              

               
     );

    }
}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
     },

    rectanglemain: {

        width: 329,
        height: 160,
        borderRadius: 25,
        marginBottom: 20,
        marginLeft: 14,
        backgroundColor: "white",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ececec"
    },
    Mobiletext: {
        fontFamily: "Roboto",
        paddingLeft: 15,
        margin: 4,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        color: "#000000",
        justifyContent: "space-between", textAlign: "justify", fontSize: 17
    },
    Mobileinnertext: {
        paddingLeft: 15,
        margin: 2,
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        color: "#000000",
        justifyContent: "space-between", textAlign: "justify", fontSize: 14
    },
    Request: {
        width: 104,
        height: 40,
        paddingTop: 10,
        paddingBottom: 34,
        borderRadius: 25,
        marginLeft: 217,
        backgroundColor: "white",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 24,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#ececec"
    }
})
export default BrowseServices;