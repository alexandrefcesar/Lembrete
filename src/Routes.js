import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './componentes/FormLogin'
import FormCadastro from './componentes/FormCadastro'
import BoasVindas from './componentes/BoasVindas'
import Lembrete from './telas/Lembrete'
import Splash from './telas/Splash'




export default props => (
    <Router >
            
     <Scene key="root">
     <Scene initial  key='splash' component={Splash} hideNavBar />
        <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar={true} />
        <Scene key='formCadastro' component={FormCadastro}  hideNavBar={false} />
        <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar={true} />
        <Scene key='lembrete' component={Lembrete}  hideNavBar={true} />

    </Scene>
    </Router>
)

/*<Router>
    <Scene initial  key='splashScreen' component={SplashScreen} title='Sayan' hideNavBar />
    <Scene key='loginScreen' component={LoginScreen} title='President Login' hideNavBar />
    <Scene key='drawer' component={NavigationDrawer} open={false}>
        <Scene key='drawerChildrenWrapper' hideNavBar>
            <Scene key='homeScreen' component={HomeScreen} title='Sayan' hideNavBar />
            <Scene key='createUserScreen' component={CreateUserScreen} title='Create a user' hideNavBar />   
            <Scene key='Profile' component={ProfileScreen} title='Profile' hideNavBar />
        </Scene>
    </Scene>
</Router>
*/