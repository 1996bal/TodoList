import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import Checkbox_active from '../assets/svg/checkbox_active.svg';
import Favourite_inactive from '../assets/svg/favourite_inactive.svg'
import Favourite_active from '../assets/svg/favourite_active.svg'
import Cale from '../assets/svg/calendar.svg'
export default function CompletedTask(props) {
  console.log("aq", props.completedTask1);

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }} >
      <FlatList
        data={props.completedTask1}
        renderItem={
          ({ item }) => (
            <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '3%' }}>
              <TouchableOpacity
                onPress={
                  () => {

                    if (!item.isChecked) {
                      props.setApi([...props.api, { 'id': item.id, 'title': item.title, 'isFavourite': item.isFavourite, 'isChecked': !item.isChecked },]);

                    }
                    const aaaa = props.favourite.map(
                      (s) => {
                        if (s.title == item.title) {
                          return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': !s.isChecked };
                        } else {
                          return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                        }
                      }
                    )

                    props.setFavourite(aaaa)
                    const a = props.completedTask1.filter(
                      (s) => {
                        if (s.title !== item.title) {
                          return s;
                        }
                      }
                    )
                    props.setCompletedTask1(a)
                  }
                }
              >
                <View style={{ marginLeft: '5%', marginTop: '12%' }} ><Checkbox_active /></View>

              </TouchableOpacity>
              <View style={{ flexDirection: 'column', width: 300 }}>
                <Text style={{ color: '#303030', width: '80%', marginLeft: '0%', padding: '2%' }}>{item.title}</Text>
                {item.dateNow ?
                  <View style={{ backgroundColor: '#F6F6F6', width: '37%', height: '45%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center', gap: 5 }}>

                    <View style={{ marginBottom: '3%', marginLeft: '2%', marginTop: '5%' }}><Cale />
                    </View>
                    <Text style={{ marginBottom: '0%', color: '#303030' }}>{item.dateNow}</Text>

                  </View> : ''
                }

              </View>
              <TouchableOpacity
                onPress={
                  () => {
                    if (item.isFavourite) {
                      props.setFavourite([...props.favourite, { 'id': item.id, 'title': item.title, 'isFavourite': !item.isFavourite, 'isChecked': item.isChecked },]);

                    }
                    const a = props.completedTask1.map(
                      (s) => {
                        if (s.title == item.title) {
                          return { 'id': s.id, 'title': s.title, 'isFavourite': !s.isFavourite, 'isChecked': s.isChecked };
                        } else {
                          return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                        }
                      }
                    )
                    props.setCompletedTask1(a)
                    if (!item.isFavourite) {
                      const asd = props.favourite.map(
                        (s) => {
                          if (s.id == item.id) {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': !s.isFavourite, 'isChecked': s.isChecked };
                          }
                          else {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                          }
                        }
                      )
                      props.setFavourite(asd)
                    }
                  }
                }
              >
                <View >{item.isFavourite ? <Favourite_inactive /> : <Favourite_active />}</View>
              </TouchableOpacity>

            </View>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});






