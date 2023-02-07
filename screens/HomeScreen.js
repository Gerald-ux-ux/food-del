import React, { useLayoutEffect } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ChevronDownIcon,
  ScissorsIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
              <ChevronDownIcon size={20} />
            </Text>
          </View>
          <UserIcon size={35} />
        </View>
        {/*Search*/}
        <View className="flex-row items-center space-x-2 p-2 mx-4  ">
          <View className="flex-row flex-1 space-x-2  bg-gray-200 pb-3 rounded-md ">
            <TextInput
              type="text"
              // className="dark:focus:border-blue-200 dark:focus:ring-blue-200"
              placeholder="Search for food"
              required
              keyboardType="default"
            />
          </View>
          <AdjustmentsHorizontalIcon />
        </View>
      </SafeAreaView>
      <View>
        {/*Body*/}
        <ScrollView>
          {/*Categories*/}
          <Categories />

          {/*Featured rows*/}
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
