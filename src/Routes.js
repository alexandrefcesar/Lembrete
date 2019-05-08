import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './componentes/FormLogin'
import FormCadastro from './componentes/FormCadastro'
import BoasVindas from './componentes/BoasVindas'
import Lembrete from './telas/Lembrete'




export default props => (
    <Router >
     <Scene key="root">
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} initial/>
        <Scene key='formCadastro' component={FormCadastro}  hideNavBar={false} />
        <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar={true} />
        <Scene key='lembrete' component={Lembrete}  hideNavBar={true} />

    </Scene>
    </Router>
)