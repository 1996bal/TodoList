import { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Add from '../assets/svg/add.svg'
import Favourite_inactive from '../assets/svg/favourite_inactive.svg'
import Favourite_active from '../assets/svg/favourite_active.svg'
import Clock from '../assets/svg/clock.svg'
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default function Addicon(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskValue, setTaskValue] = useState('');
  const [dateAdd, setDateAdd] = useState(false);
  const [star, setStar] = useState(true);
  const [date, setDate] = useState('');

  function taskValueAdd() {
    props.setTask([...props.task, { id: (props.task.length) + 1, title: taskValue, isFavourite: star, isChecked: true, dateNow:date }])
  }


  return (
    <View  >
      <Modal animationType="slide" transparent={true} visible={dateAdd}>
        <Calendar
          onDayPress={(day) => {
            const formattedDate = moment(day.dateString).format(
              'DD MMM, YYYY '
            );

            setDate(formattedDate)
            setDateAdd(!dateAdd)
          }}
        />
      </Modal>
      <KeyboardAvoidingView>
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View
            style={{
              flex: 1,

              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 15,
                width: '100%',
                height: '17%',
                borderRadius: 10,
                top: '80%',
                flex: 0.15
              }}>

              <TextInput placeholder='New Task…' placeholderTextColor='#D9D9D9'  color='#303030' autoCapitalize="none" onChangeText={(value) => { setTaskValue(value) }} />
              <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', gap: 10 }}>
                <Pressable onPress={() => setStar(!star)}>
                  {star ? <Favourite_inactive /> : <Favourite_active />}
                </Pressable>

                <Pressable onPress={() => setDateAdd(!dateAdd)} >
                  <Clock />
                </Pressable>


                <View style={{ marginLeft: '60%' }}>
                  <Pressable onPress={() => { setModalVisible(!modalVisible), taskValueAdd() }}>
                    <Text style={{ color: '#B13D3D', fontSize: 16, width: 70, height: 19, fontWeight: '600', }}>Add Task</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      <View style={{
        width: 50, height: 50, backgroundColor: '#FFE4E4', justifyContent: 'center',
        alignItems: 'center', borderRadius: 10, marginLeft: '80%', bottom: 50
      }}>
        <Pressable onPress={() => { setModalVisible(!modalVisible) }}>
          <Add />
        </Pressable>
      </View>

    </View>
  )
}