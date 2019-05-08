import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableHighlight
} from 'react-native'
import icon from '../../assets/imgs/imagem6.png'
import icon2 from '../../assets/imgs/sair.png'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Actions } from 'react-native-router-flux'


class Header extends Component{
    render(){
        return(
            <View style = {styles.container}>  
                <View style= {styles.rowContainer}>

                        <Icon name='calendar' size={25} color='white'/>
                  
                        <Text style={styles.title}>  Lista de Lembretes</Text>
                    <TouchableHighlight  onPress={() => Actions.formLogin()}>
                        <Image source={icon2} style={styles.image}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20:0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor:'#BBB',
        width:'100%',
        backgroundColor:'#313131'
       
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    image:{
        height:30,
        width:30,
        resizeMode: 'contain'
    },
    title:{
        color:'#ffffff',
        fontWeight: 'bold',
        padding: 2,
        height: 30,
        fontSize: 15,
    },
    icon:{
        color:'#ffffff'
    },

})

export default Header
