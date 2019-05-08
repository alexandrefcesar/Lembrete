import React from 'react'
import {StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import EstiloComum from '../EstiloComum'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-swipeable'
import { Actions } from 'react-native-router-flux';
import AdicionarLembrete from './../telas/AdicionarLembrete'

export default props => {
    let check = null
    if(props.doneAt != null){
        check = (
            <View style = {styles.done}>
                <Icon name= 'check' size={20}/>
            </View>
        )
    } else{
        check = <View style={styles.pending}/>
    }

    const descStyle= props.doneAt != null ? 
        {textDecorationLine:'line-through'} : {}
    
    const leftContent=(
        <View style={styles.exclude}>
            <Icon name='trash' size={20}
                color={EstiloComum.colors.default}/>
                <Text style={styles.excludeText}>Excluir</Text>
        </View>

    )
    const rightContent =[
        < TouchableOpacity
            style={[styles.exclude,{justifyContent:'flex-start',
            paddingLeft:20}]} onPress={() =>props.onDelete(props.id)}>
            <Icon name='trash' size={30} color={EstiloComum.colors.secondary}/>
        </ TouchableOpacity>
    ]
    
return(
    <Swipeable leftActionActivationDistance={180} 
        onLeftActionActivate={()=>props.onDelete(props.id)}
        leftContent={leftContent} rightButtons={rightContent}>
        <View style={styles.container}>
        <Icon name='exclamation-triangle' size={20}  paddingRight={10}
                color={'#313131'}/>
              <View>
            
                <Text style={[styles.description,descStyle]}>
                    {props.desc}
                </Text>
                <Text style={styles.date}>
                {moment(props.estimateAt).locale('pt-br').format('ddd, D[de] MMMM [de] YYYY')}
                </Text>
                <View style={styles.checkContainer}>            
                </View>  
            </View>   
            
        </View>
           
    </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:10,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#AAA',
    },
    checkContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'20%',
    },
    pending:{
        borderWidth:1,
        height:25,
        width:25,
        borderRadius:15,
        borderColor:'#555',
    },
    done:{
        height:25,
        width:25,
        borderRadius:15,
        backgroundColor:'#4D7031',
        alignItems:'center',
        justifyContent:'center',
    },
    description:{
        fontSize:15
    },
    date:{
        fontFamily:EstiloComum.fontFamily,
        fontSize:10
    },
    exclude:{
        flex:1,
        backgroundColor:'red',
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    excludeText:{
        fontFamily:EstiloComum.fontFamily,
        color:'blue',
        fontSize:20,
        margin:10,
    }
})