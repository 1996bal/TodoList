import * as React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Checkbox_inactive from '../assets/svg/checkbox_inactive.svg';
import Checkbox_active from '../assets/svg/checkbox_active.svg';
import Favourite_inactive from '../assets/svg/favourite_inactive.svg'
import Favourite_active from '../assets/svg/favourite_active.svg'
import Cale from '../assets/svg/calendar.svg'
import { useNavigation } from '@react-navigation/native';

export default function MyTask(props) {

    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }} >
            <FlatList
                data={props.api}
                renderItem={
                    ({ item }) => (
                        <View style={{ flexDirection: 'row', marginTop: '2%', marginLeft: '3%', }}>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        //unchecked


                                        if (item.isChecked) {
                                            props.setCompletedTask1([...props.completedTask1, { 'id': item.id, 'title': item.title, 'isFavourite': item.isFavourite, 'isChecked': !item.isChecked },]);

                                        }
                                        if (!item.isFavourite) {
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
                                        }

                                        const a = props.api.filter(
                                            (s) => {
                                                if (s.id !== item.id) {
                                                    return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': !s.isChecked };
                                                }
                                            }
                                        )
                                        props.setApi(a)




                                    }
                                }
                            >
                                <View style={{ padding: '2%', marginTop: '15%' }} ><Checkbox_inactive /></View>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {

                                navigation.navigate('TaskDetails', {
                                    itemData: item,
                                    initial: props
                                });
                            }}>
                                <View style={{ flexDirection: 'column', width: 300 }}>
                                    <Text style={{ color: '#303030', width: '80%', marginLeft: '0%', padding: '2%' }}>{item.title}</Text>
                                    {item.dateNow ?
                                        <View style={{ backgroundColor: '#F6F6F6', width: '37%', height: '40%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center', gap: 5 }}>

                                            <View style={{ marginBottom: '3%', marginLeft: '2%' }}><Cale />
                                            </View>
                                            <Text style={{ marginBottom: '5%', color: '#303030' }}>{item.dateNow}</Text>

                                        </View> : ''
                                    }

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {

                                        if (item.isFavourite) {
                                            props.setFavourite([...props.favourite, { 'id': item.id, 'title': item.title, 'isFavourite': !item.isFavourite, 'isChecked': item.isChecked },]);

                                        }
                                        const d = props.favourite.filter(
                                            (s) => {
                                                if (s.title !== item.title) {
                                                    return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                                                }
                                            }
                                        )
                                        props.setApi(d)

                                        const a = props.api.map(
                                            (s) => {
                                                if (s.title == item.title) {
                                                    return { 'id': s.id, 'title': s.title, 'isFavourite': !s.isFavourite, 'isChecked': s.isChecked };
                                                } else {
                                                    return { 'id': s.id, 'title': s.title, 'isFavourite': s.isFavourite, 'isChecked': s.isChecked };
                                                }
                                            }
                                        )

                                        props.setApi(a)
                                    }
                                }
                            >
                                <View style={{ margin: '5%' }} >{item.isFavourite ? <Favourite_inactive /> : <Favourite_active />}</View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            />

        </View>
    )
}

