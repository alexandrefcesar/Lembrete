import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight ,TouchableOpacity,
    ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';



class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if(this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={() => this._autenticarUsuario()}
          >
               <Text style={styles.TextStyle}>Iniciar Sessão</Text>          
         </TouchableOpacity>
        )
    }
    
    render() {
        return (
    <View style={{ flex: 1, padding: 10 ,backgroundColor: '#fafafa'}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={ styles.TextStyle1 }>INICIE A SESSÃO NO LEMBRETE</Text>
        </View>
        <View style={{ flex: 2,backgroundColor: '#fafafa'}}>
            <Icon name= 'user' size={20} style= {styles.icon}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "E-mail"
               placeholderTextColor = "#999999"
               autoCapitalize = "none"
               onChangeText={texto => this.props.modificaEmail(texto)} />
            <Icon name= 'lock' size={20} style= {styles.icon}/>
            <TextInput style = {styles.input}
               secureTextEntry={true}
               underlineColorAndroid = "transparent"
               placeholder = "Senha"
               placeholderTextColor = "#999999"
               autoCapitalize = "none"
               onChangeText={texto => this.props.modificaSenha(texto) }  /> 
            <Text style={{ color: '#ff0000', fontSize: 18 }}>
                            {this.props.erroLogin}
            </Text>
            <TouchableHighlight onPress={() => Actions.formCadastro() }>
                <Text style={{ fontSize: 15 ,color:'#1770c9',marginLeft:10}}>Criar conta</Text>
            </TouchableHighlight>
        </View>
        <View style={{ flex: 1}}>
            {this.renderBtnAcessar()}
        </View>
    </View>
       );
    }
}


const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
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
    input: {
        margin: 10,
        height: 40,
        borderColor: '#d6d6d6',
        borderWidth: 1
     },
   
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },
    TextStyle1:{
        color:'#111111',
        fontWeight: "bold",
        fontSize: 18,
        textAlign:'center',
    },
    TextStyle2:{
        color:'#ffffff',
        fontSize: 20,
        height: 45,
    } ,
    icon:{
        color:'#313131',
        marginLeft:20,
    },
  });
const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);