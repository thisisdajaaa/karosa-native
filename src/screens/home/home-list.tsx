import React from "react";
import { FlatList, View } from "react-native";
import { ListChevron } from "@app/components/list/list-chevron";
import { HomeCard } from "@app/components/cards/product";

import { HomeListProps } from "./types";

export const HomeList: React.FC<HomeListProps> = ({
  data,
  title,
  info,
  onPress,
}) => {
  return (
    <View style={{ height: 300, marginTop: 15, backgroundColor: "white" }}>
      <ListChevron
        title={title}
        txtInfo={info}
        onPress={onPress}
        containerStyle={{
          paddingTop: 12,
          paddingLeft: 12,
          paddingRight: 12,
          paddingBottom: 0,
        }}
        iconStyle={{ fontSize: 28, color: "#0AA351" }}
        txtInfoStyle={{
          fontSize: 16,
          lineHeight: 18.75,
          color: "#0AA351",
          fontWeight: "400",
          marginLeft: 12,
        }}
      />
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => <HomeCard item={item} />}
      />
    </View>
  );
};
