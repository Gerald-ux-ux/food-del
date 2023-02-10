import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
// import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurant] = useState([]);

  const sanityClient = require("@sanity/client")({
    projectId: "00ukpm5n",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type == 'featured' && _id == $id] {
    ...,
    restaurant[] ->{
      ...,
      dishes[] -> {
        ...,
        types ->{
          ...,
          name
        }
      }
    }
  }[0]
    `,
        { id }
      )
      .then((data) => {
        // console.log(data?.restaurant)
        setRestaurant(data?.restaurant);
        // console.log(restaurant);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurant?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.restaurant}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.genre?.name}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
        {/*Restaurant cards*/}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
