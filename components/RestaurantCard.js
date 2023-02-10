import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import { urlFor } from '../sanity'

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className='mr-3 rounded-md bg-white shadow '>
      <Image
        source={{
          uri: urlFor (imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="items-center flex-row space-x-1">
          <StarIcon opacity={0.5} size={22} />
          <Text className='text-black-200 text-xs'>
            <Text className='text-blue-500'>{rating}</Text> {genre}
          </Text>
              </View>
              
              <View className='felx-row  space-x-1'>
                  {/* <LocationMarkerIcon /> */}
                  <Text className='text-xs text-gray-500'>
                     {address}
                  </Text>
              </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
