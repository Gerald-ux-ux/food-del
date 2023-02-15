import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#000000] bg-white shadow-xs">
          <View>
            <Text className="text-lg  text-center font-extrabold">Basket</Text>
            <Text className="text-center text-black-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-full absolute top-4 right-3"
            onPress={navigation.goBack}
          >
            <XCircleIcon color="#000000" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="font-bold p-1 flex-1">Delivery in 50-75 min</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-[#ea5f5f] ">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200 ">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5  "
              >
                <Text className="text-[#ea5f5f]">{items.length} x</Text>
                <Image
                  source={{
                    uri: urlFor(items[0]?.image).url(),
                  }}
                  className="h-12 w-12 rounded-sm"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text>
                  <Currency quantity={items[0]?.price} currency="GBP" />
                </Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#ea5f5f] text-xs  "
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4 rounded-sm">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={2.99} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 2.99} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            className='rounded-lg p-4 bg-[#000000]'>
            <Text className='text-white text-center text-lg font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
