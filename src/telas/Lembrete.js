import React, {Component} from 'react'
import {StyleSheet,
     Text , 
     View , 
     FlatList,
     Button,
    TouchableOpacity,
    Platform,
    AsyncStorage,
DatePickerAndroid } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import Header from '../componentes/Header'
import Funcoes from '../componentes/Funcoes'
import EstiloComum from '../EstiloComum';
import ActionButton from 'react-native-action-button'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Async Storage'])
import AdicionarLembrete from './AdicionarLembrete'
class Lembrete extends Component{
    state = {
        livros:[],
        visibleFuncoes: [],
        showDoneFuncoes:true,
        showAddFuncoes:false,
    } 
    addFuncoes= livro =>{
        const livros=[...this.state.livros]
        livros.push({
            id:Math.random(),
            desc:livro.desc,
            estimateAt:livro.date,
            doneAt:null
        })
        this.setState({livros,showAddFuncoes:false
        },this.filterFuncoes)
    }
    deleteTask= id=>{
        const livros = 
        this.state.livros.filter(livro=>livro.id !== id)
        this.setState({livros},
            this.filterFuncoes)
    }
    filterFuncoes = ()=>{
        let visibleFuncoes= null
        if(this.state.showDoneFuncoes){
            visibleFuncoes = [...this.state.livros]
        }else{
            const pending = livro => livro.doneAt == null
            visibleFuncoes = this.state.livros.filter(pending)
        }
        this.setState({visibleFuncoes})
        AsyncStorage.setItem('livros',JSON.stringify(this.state.livros))
    }
    toggleFilter = ()=>{
        this.setState({
            showDoneFuncoes: !this.state.showDoneFuncoes
        },
        this.filterFuncoes
        )
    }
    componentDidMount = async ()=> {
        const data= await AsyncStorage.getItem('livros')
        const livros=JSON.parse(data) || []
        this.setState({livros},this.filterFuncoes)
        
    }
    toggleTask = id =>{
        const livros= this.state.livros.map( livro=>{
            if(livro.id === id){
                livro ={...livro}
                livro.doneAt = livro.doneAt ? null : new Date()
            }
            return livro
        })
        this.setState({livros},this.filterFuncoes)
    }
    render(){
        return(
            <View style={styles.container}>
                  <AdicionarLembrete isVisible={this.state.showAddFuncoes}
                        onSave={this.addFuncoes}
                        onCancel={()=>this.setState({showAddFuncoes:false})}/>
                  <Header/>
                <View style={styles.bibliotecaContainer}>
                    <FlatList data={this.state.visibleFuncoes}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => 
                    <Funcoes {...item} toggleTask={this.toggleTask}
                    onDelete={this.deleteTask}/>}/>
                </View> 
                <ActionButton buttonColor={EstiloComum.colors.today}
                onPress={()=>{this.setState({showAddFuncoes:true})}}/>
             
                 
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex:3,
        color:'#313131'
    },
    tituloDaBarra:{
        flex:1,
        color:'#313131',
        justifyContent:'flex-end',
        fontSize:50,
        color:'white',
    },
    titulo:{
        fontWeight: 'bold',
        color:'white',
        fontSize:50,
        marginLeft:20,
        marginBottom:10,
    },
    subtitle:{
        fontWeight: 'bold',
        fontSize:20,
        marginLeft:20,
        marginBottom:30
    },
    bibliotecaContainer:{
        flex:7,
        color:'#fafafa'

    },
    iconBar:{
        marginTop:Platform.OS == 'ios' ? 30:10,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
    }
})

export default Lembrete