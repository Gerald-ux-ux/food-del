import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import client, { urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == 'category' ]
      `
      )
      .then((data) => {
        setCategories(data);
        // console.log(data);
      });
  }, [])

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
      {categories.map((category => {
           const imgUrl = category.image
             ? urlFor(category.image).width(210).url()
             : null;
        return (
          <CategoryCard
            key={category._id}
            imgUrl={imgUrl}
            title={category.title}
          />
        );
      }))}
    
    </ScrollView>
  );
};

export default Categories;
