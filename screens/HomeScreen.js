import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const sanityClient = require("@sanity/client")({
  projectId: "00ukpm5n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const query = `*[_type == 'featured'] {
    ...,
    restaurants[] {
      ...,
      types {
        name
      }
    }
  }`;

  useEffect(() => {
    sanityClient.fetch(query).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

const filteredCategories = featuredCategories.filter((category) => {
  // Combine name and description fields into one string for searching
  const searchString =
    `${category.name} ${category.short_description}`.toLowerCase();
  return searchString.includes(searchQuery.toLowerCase());
});

  return (
    <>
      <SafeAreaView className="bg-white pt-5 ">
        {/*Header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#000000" />
            </Text>
          </View>
          <UserIcon size={35} color="#000000" />
        </View>
        {/*Search*/}
        <View className="flex-row items-center space-x-2 p-2 mx-4  ">
          <View className="flex-row flex-1 space-x-2  bg-gray-200 pb-3 rounded-lg p-2 ">
            <TextInput
              type="text"
              placeholder="Search for a category..."
              autoFocus = "true"
              required
              keyboardType="default"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          <AdjustmentsHorizontalIcon color="#000000" />
        </View>
      </SafeAreaView>
      <View>
        {/*Body*/}
        <ScrollView>
          {/*Categories*/}
          <Categories />

          {/*Featured */}
          {filteredCategories.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
