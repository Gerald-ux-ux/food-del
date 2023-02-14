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
import { selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";

const BasketScreen = () => {
  const navigation = useNavigation();
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
            <Text className="text-[#e76969]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
