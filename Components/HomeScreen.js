import { View, Text } from 'react-native'
import HeaderScreen from './HeaderScreen'
import BodyScreen from './BodyScreen'
import { useState, useEffect } from 'react'
import Addicon from './AddDataScreen'
import SplashScreen from './SplashScreen'

const Data = [
    { id: 1, title: 'Buy eggs and bread for breakfast', isFavourite:true, isChecked:true },
    { id: 2, title: 'Pay college tuition fee ',isFavourite:true, isChecked:true },
    { id: 3, title: 'Plan to book the party hall for birthday', isFavourite:true, isChecked:true },
    { id: 4, title: 'Visit granny before Christmas', isFavourite:true, isChecked:true },
    { id: 5, title: 'Book flight tickets for San Diago before the offer ends', isFavourite:true, isChecked:true },
  ];

export default function HomeScreen({ route }) {

    const [isShowSplash, setIsShowSplash] = useState(true)
    const [total, setTotal] = useState('');
    const [completedtask, setCompletedtask] = useState('');
    const [task, setTask] = useState(Data);
    useEffect(
        () => {
            setTimeout(() => {
                setIsShowSplash(false);
            }, 2000);
        }
    )

    return (

        isShowSplash ? <SplashScreen /> : <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 0.26 }}>
                <HeaderScreen Data={task} total={total} completedtask={completedtask} />
            </View>
            <View style={{ flex: 0.85 }}>
                <BodyScreen task={task} setTask={setTask} setTotal={setTotal}  setCompletedtask={setCompletedtask} />
            </View>
            <Addicon setTask={setTask} task={task} />
        </View>
    )

}