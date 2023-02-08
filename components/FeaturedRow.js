import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
        {/*Restaurant cards*/}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={3.7}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi is the best japanese food "
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={3.7}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi is the best japanese food "
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={3.7}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi is the best japanese food "
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={3.7}
          genre="Japanese"
          address="123 Main Street"
          short_description="Sushi is the best japanese food "
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
