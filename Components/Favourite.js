import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import Checkbox_inactive from '../assets/svg/checkbox_inactive.svg';
import Checkbox_active from '../assets/svg/checkbox_active.svg';
import Favourite_inactive from '../assets/svg/favourite_inactive.svg';
import Favourite_active from '../assets/svg/favourite_active.svg';
import Cale from '../assets/svg/calendar.svg';

export default function Favourite(props) {

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }} >

      <FlatList
        data={props.favourite}
        renderItem={
          ({ item }) => (
            <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '3%' }}>

              <View style={{ flexDirection: 'row', gap: 10, }}>
                <TouchableOpacity
                  onPress={
                    () => {

                      if (item.isChecked) {
                        props.setCompletedTask1([...props.completedTask1, { 'id': item.id, 'title': item.title, 'isFavourite': item.isFavourite, 'isChecked': !item.isChecked },]);

                      }

                      const a = props.favourite.map(
                        (s) => {
                          if (s.title == item.title) {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': !s.isChecked };
                          } else {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                          }
                        }
                      )

                      props.setFavourite(a)
                      const asd = props.api.filter(
                        (s) => {
                          if (s.id !== item.id) {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                          }
                        }
                      )
                      props.setApi(asd)
                      if (!item.isChecked) {
                        const asd = props.completedTask1.filter(
                          (s) => {
                            if (s.id !== item.id) {
                              return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                            }
                          }
                        )
                        props.setCompletedTask1(asd)
                        props.setApi([...props.api, { 'id': item.id, 'title': item.title, 'isFavourite': item.isFavourite, 'isChecked': !item.isChecked },]);
                      }

                    }
                  }

                >
                  <View style={{ marginLeft: '0%', marginTop: '10%' }} >{item.isChecked ? <Checkbox_inactive /> : <Checkbox_active />}</View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column', width: 300, }}>
                  <Text style={{ color: '#303030', width: '80%', marginLeft: '0%', padding: '1%' }}>{item.title}</Text>
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
                      const a = props.favourite.filter(
                        (s) => {
                          if (s.title !== item.title) {
                            return s;
                          }
                        }
                      )
                      props.setFavourite(a)
                      const b = props.api.map(
                        (s) => {
                          if (s.title == item.title) {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': !s.isFavourite, 'isChecked': s.isChecked };
                          } else {
                            return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                          }
                        }
                      )

                      props.setApi(b)
                      if (!item.isFavourite) {
                        const asd = props.completedTask1.map(
                          (s) => {
                            if (s.id == item.id) {
                              return { 'id': s.id, 'title': s.title, 'isFavourite': !s.isFavourite, 'isChecked': s.isChecked };
                            }
                            else {
                              return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                            }
                          }
                        )
                        props.setCompletedTask1(asd)
                      }

                    }
                  }
                >
                  <View >{item.isFavourite ? <Favourite_inactive /> : <Favourite_active />}</View>
                </TouchableOpacity>
              </View>

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