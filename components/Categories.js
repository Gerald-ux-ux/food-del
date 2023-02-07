import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/*Category Card*/}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 6" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 7" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Image 8" />
    </ScrollView>
  );
};

export default Categories;
