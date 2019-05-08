import React,{Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableHighlight ,TouchableOpacity,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha,
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if(this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity = { .5 }
            onPress={() => this._cadastraUsuario()}
          >
               <Text style={styles.TextStyle}>Iniciar Sessão</Text>          
         </TouchableOpacity>
            
        )
    }

    render() {    
        return (
    <View style={{ flex: 1, padding: 10 ,backgroundColor: '#fafafa'}}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={ styles.TextStyle1 }>Cadastro</Text>
    </View>
    <View style={{ flex: 2,backgroundColor: '#fafafa'}}>
        <Icon name= 'user' size={20} style= {styles.icon}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nome"
               placeholderTextColor = "#999999"
               autoCapitalize = "none" 
               onChangeText={texto => this.props.modificaNome(texto)} />
        <Icon name= 'at' size={20} style= {styles.icon}/>
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
               onChangeText={texto => this.props.modificaSenha(texto)} /> 
        </View>
        <View style={{ flex: 1}}>
        {this.renderBtnCadastro()}
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
    TextStyle:{
        color:'#fff',
        textAlign:'center',
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: '#d6d6d6',
        borderWidth: 1
     },
    TextStyle1:{
        color:'#111111',
        fontWeight: "bold",
        fontSize: 18,
        textAlign:'center',
    },
    icon:{
        color:'#313131',
        marginLeft:20,
    },
  });
const mapStateToProps = state => { 
    console.log(state);
    
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha,
            erroCadastro: state.AutenticacaoReducer.erroCadastro,
            loading_cadastro: state.AutenticacaoReducer.loading_cadastro
        }
    );
}

export default connect(
    mapStateToProps, 
    {
        modificaEmail,
        modificaSenha, 
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);
