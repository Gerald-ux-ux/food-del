import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { urlFor } from "../sanity";
import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const RestaurantScreen = () => {
  const navigation = useNavigation();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
    return <ScrollView>
        <View className='relative'>
            <Image
                source={{
                uri: urlFor(imgUrl).url(),
                }}
                className='w-full h-56 bg-gray-300 p-4'
            />
            <TouchableOpacity
                onPress={navigation.goBack}
                className="absolute top-8 left-2 p-2 bg-gray-100 rounded-full">
                <ArrowLeftIcon size={20}  />
</TouchableOpacity>
          
      </View>
  </ScrollView>;
};

export default RestaurantScreen;
