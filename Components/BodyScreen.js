import { useState, useEffect } from 'react';
import { Dimensions, Text, View, TextInput } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Favourite from './Favourite';
import MyTask from './MyTask';
import CompletedTask from './CompletedTask';
import Favourite_inactive from '../assets/svg/favourite_inactive.svg'
import Favourite_active from '../assets/svg/favourite_active.svg'

function renderTabBar(props) {

  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#B13D3D' }}
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
      labelStyle={{ color: '#303030', fontSize: '10%' }}
      renderIcon={({ route, focused }) =>
        route.key === 'favourite' && <View style={{ marginVertical: '50%', }}>
          {focused ? <Favourite_active /> : <Favourite_inactive />}
        </View>
      }
      tabStyle={{ width: 'auto' }}
      renderLabel={({ route, color }) => (
        <Text style={{ color, marginHorizontal: 30 }}>{route.title}</Text>
      )}></TabBar>
  );
}

export default function BodyScreen(props) {
  const [api, setApi] = useState(props.task);
  const [favourite, setFavourite] = useState([]);
  const [completedTask1, setCompletedTask1] = useState([]);

  state = {
    index: 1,
    routes: [
      { key: 'favourite' },
      { key: 'mytask', title: 'My Task' },
      { key: 'completedtask', title: 'Completed Task' },
    ],
  };

  useEffect(
    () => { props.setTotal(props.task.length), props.setCompletedtask(completedTask1.length) }, [props.task, completedTask1]
  )

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'favourite':
        return <Favourite api={props.task} setApi={props.setTask} favourite={favourite} setFavourite={setFavourite} completedTask1={completedTask1} setCompletedTask1={setCompletedTask1} />;
      case 'mytask':
        return <MyTask api={props.task} setApi={props.setTask} completedTask1={completedTask1} setCompletedTask1={setCompletedTask1} favourite={favourite} setFavourite={setFavourite} />;
      default:
        return <CompletedTask api={props.task} setApi={props.setTask} completedTask1={completedTask1} setCompletedTask1={setCompletedTask1} favourite={favourite} setFavourite={setFavourite} />;
    }
  };

  return (

    <TabView
      navigationState={state}
      renderScene={renderScene}
      onIndexChange={(index) => { }}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={renderTabBar}
    />


  )
}

