import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { urlFor } from "../sanity";
import { TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BaskteIcon from "../components/BaskteIcon";
import { setRestaurant } from "../features/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();


  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BaskteIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-8 left-2 p-2 bg-gray-300 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon opacity={0.5} size={22} color="#000000" />
                <Text className="text-black-200 text-xs">
                  <Text className="text-black-500">{rating}</Text> {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Text className="text-xs text-gray-500">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <Text className="font-bold text-md flex-1 pt-2">
              Have a food allergy?
            </Text>
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <ChevronRightIcon color="#000000" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* Dishrow */}
          {dishes.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
