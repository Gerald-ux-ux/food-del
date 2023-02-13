
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

const BaskteIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation
    const basketTotal = useSelector(selectBasketTotal);
  return (
      <View>
          <View>
              
          </View>
    </View>
  )
}

export default BaskteIcon