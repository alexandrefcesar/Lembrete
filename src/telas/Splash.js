import React, {Component } from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
export default class Splash extends Component {
    componentDidMount () {
        setTimeout(() => {
            Actions.formLogin({ renderRightButton: this.renderRightButton });
        }, 2000)
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/calendar.png')}
                style={styles.image}/>
                <Text style={styles.header}>
                Lembrete
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height:200,
        width:200,
        resizeMode:'contain'
    },
    header:{
        fontSize:50,
        fontWeight:'bold'
    }



})