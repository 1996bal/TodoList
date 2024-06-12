import {View, Text, Image} from 'react-native';

export default function SplashScreen() {

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../assets/image/Taskmanager.png')} style={{width:'80%', height:'40%'}} />
        </View>
    )
    
}