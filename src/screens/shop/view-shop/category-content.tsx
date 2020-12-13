import React from "react";
import { FlatList } from "react-native";
import { AvatarChevron } from "@app/components/list/list-chevron";

import { styles } from "./styles";

const CategoryContent: React.FC = () => {
  const mockData = [
    {
      id: 1,
      title: "Region's Best",
      subtitle: "210 Products",
    },
    { id: 2, title: "Region's Best", subtitle: "210 Products" },
    {
      id: 3,
      title: "Region's Best",
      subtitle: "210 Products",
    },
    { id: 4, title: "Region's Best", subtitle: "210 Products" },
    {
      id: 5,
      title: "Region's Best",
      subtitle: "210 Products",
    },
    { id: 6, title: "Region's Best", subtitle: "210 Products" },
    {
      id: 7,
      title: "Region's Best",
      subtitle: "210 Products",
    },
    { id: 8, title: "Region's Best", subtitle: "210 Products" },
  ];

  return (
    <React.Fragment>
      <FlatList
        data={mockData}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.categoryContainer}
        renderItem={({ item }: any) => (
          <AvatarChevron
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => console.log("avatar chevron pressed")}
            hasBottomDivider
          />
        )}
      />
    </React.Fragment>
  );
};

export default CategoryContent;
