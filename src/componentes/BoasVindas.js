import React,{Component} from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 
'Module RCTImageLoader','componentWillReceiveProps','componentWillMount'])
class BoasVindas extends Component {
    render() {    
        return (
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#313131' }}>Cadastro Concluído</Text>
            </View>
            <View style={{ flex: 1 }}>
               
                <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={() => Actions.formLogin()}
          >
               <Text style={styles.TextStyle}>Fazer Login</Text>          
         </TouchableOpacity>
            </View>
        </View>
        )
}
}
const styles = StyleSheet.create({
    SubmitButtonStyle: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'#2798e0',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    }
  });

  export default BoasVindas