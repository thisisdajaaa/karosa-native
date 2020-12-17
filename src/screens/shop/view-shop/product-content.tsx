import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ListItem } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { BuyerCard } from "@app/components/cards/product";
import { BaseText } from "@app/components/base-text";

import { ActiveLink } from "./type";
import { styles, dropdownStyle, linkLabels } from "./styles";

const ProductContent: React.FC = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>("Popular");
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const dropdown = dropdownStyle(activeLink, sortAsc).dropdownIcon;

  const mockData = [
    {
      id: 1,
      name: "Banana Product two line",
    },
    { id: 2, name: "Banana Product two line " },
  ];

  return (
    <React.Fragment>
      <ListItem>
        <ListItem.Content style={styles.primaryPadding}>
          <TouchableOpacity onPress={() => setActiveLink("Popular")}>
            <BaseText style={linkLabels(activeLink, "Popular").txtLink}>
              Popular
            </BaseText>
          </TouchableOpacity>
        </ListItem.Content>
        <ListItem.Content style={styles.secondaryPadding}>
          <TouchableOpacity onPress={() => setActiveLink("Latest")}>
            <BaseText
              style={linkLabels(activeLink, "Latest").txtLink}
              onPress={() => setActiveLink("Latest")}
            >
              Latest
            </BaseText>
          </TouchableOpacity>
        </ListItem.Content>
        <ListItem.Content style={styles.secondaryPadding}>
          <TouchableOpacity onPress={() => setActiveLink("Price")}>
            <BaseText
              style={linkLabels(activeLink, "Price").txtLink}
              onPress={() => setActiveLink("Price")}
            >
              Price
            </BaseText>
            <ListItem.Content style={styles.dropdownIconContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setSortAsc(!sortAsc);
                }}
              >
                <AntDesign name="down" style={dropdown} />
              </TouchableWithoutFeedback>
            </ListItem.Content>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>

      <FlatList
        numColumns={2}
        data={mockData}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.contentCenter}
        renderItem={({ item }: any) => <BuyerCard item={item} />}
      />
    </React.Fragment>
  );
};

export default ProductContent;
