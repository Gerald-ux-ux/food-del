import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";

import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketItemsById,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsById(state, id));
  const dispatch = useDispatch();

  const addItemToBasktet = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(true)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text>
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon
                size={40}
                color="#000000"
                // color={items.length > 0 ? "#0000FF" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasktet}>
              <PlusCircleIcon
                size={40}
                color="#000000"
                // color={items.length > 0 ? "#0000FF" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
