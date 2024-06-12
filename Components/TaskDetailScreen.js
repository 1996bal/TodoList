import { View, Text, TouchableOpacity } from 'react-native';
import Delete from '../assets/svg/delete.svg';
import Favourite_active from '../assets/svg/favourite_active.svg';
import Favourite_inactive from '../assets/svg/favourite_inactive.svg';
import Back from '../assets/svg/back.svg'
import Close from '../assets/svg/close.svg'
import Completed from '../assets/svg/complete.svg'
import Cale from '../assets/svg/calendar.svg'
export default function TaskDetails({ navigation, route }) {

  const item = route.params.itemData

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <View style={{ flex: 0.85, }}>
        <View style={{ flexDirection: 'row', marginLeft: '2%', marginTop: '10%' }} >
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}><Back /></TouchableOpacity>
          <View style={{ justifyContent: 'center', marginLeft: '30%' }}><Text style={{ color: '#303030', fontWeight: '600', fontSize: 20 }}>Task Detail</Text></View>
          <View style={{ marginLeft: '20%' }}>
            <TouchableOpacity
              onPress={
                () => {


                  if (item.isFavourite) {
                    props.setFavourite([...props.favourite, { 'id': item.id, 'title': item.title, 'isFavourite': item.isFavourite, 'isChecked': item.isChecked }

                    ])
                  } else {
                    const b = props.favourite.filter(
                      (s) => {
                        if (s.title !== item.title) {

                          return s;

                        }
                      }
                    )

                    props.setFavourite(b)
                  }

                }
              }
            >
              {route.params.itemData.isFavourite ? <Favourite_inactive /> : <Favourite_active />}
            </TouchableOpacity></View>
          <View style={{ marginLeft: '1%' }}>

            <TouchableOpacity
              onPress={
                () => {

                }
              }
            >
              <Delete />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: '15%', marginLeft: '7%', width: '70%', }}>
          <Text style={{ color: '#303030', fontWeight: '400', marginLeft: '2%' }}>{route.params.itemData.title}</Text>
          {
            route.params.itemData.dateNow ? <View style={{ backgroundColor: '#F6F6F6', width: '48%', height: '18%', marginLeft: '0%', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: '3%' }}>

              <View style={{ marginBottom: '2%', marginLeft: '2%' }}><Cale />
              </View>
              <Text style={{ marginBottom: '3%', color: '#303030' }}>{route.params.itemData.dateNow}</Text>
              <View style={{ marginLeft: -8, marginBottom: 4 }}>
                <Close />
              </View>
            </View> : ''
          }
        </View>
      </View>

      <View style={{ flex: 0.1 }}>
        <TouchableOpacity onPress={() => {
 
          navigation.navigate("HomeScreen");
        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#B13D3D', height: 50, marginHorizontal: '5%', borderRadius: 5, }} ><Completed />
            <Text style={{ color: '#FFFFFF' }}>Mark Completed</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>
  )
}