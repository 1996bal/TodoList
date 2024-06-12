import { View, Text, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native'
import Settings from '../assets/svg/settings.svg'
import Bg from '../assets/image/bg.png'

export default function HeaderScreen(props) {
    return (
        <View style={{}}>

            <ImageBackground source={Bg} style={{ width: '100%', height: 200 }} >
                <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                    <View style={{ width: 20, height: 20, marginLeft: '1%' }}>
                        <Image source={require('../assets/image/profile.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: '10%', width: '70%', marginTop: '2%' }}>
                        <Text style={{ color: '#303030' }}>Good day</Text>
                        <Text style={{ color: '#303030', fontWeight: 'bold' }}>Bernice Thompson!</Text>
                    </View>
                    <View style={{ marginTop: '1%' }}>
                        <TouchableOpacity onPress={()=>{Linking.openSettings()}}>
                        <Settings width={30} height={40} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ marginHorizontal: '5%', height: '1%', backgroundColor: '#E3DACF', marginTop: '5%' }}></View>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ color: '#303030' }}>Today’s Task</Text>
                        <Text style={{ color: '#303030', fontWeight: 'bold' }}>{props.total}/{props.Data.length} completed</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={{ color: '#303030' }}>Total Task to be completed</Text>
                        <Text style={{ color: '#303030', fontWeight: 'bold' }}>{props.completedtask} {props.completedtask > 1 ? 'tasks' : 'task'}</Text>

                    </View>
                </View>

            </ImageBackground>

        </View>
    )

}