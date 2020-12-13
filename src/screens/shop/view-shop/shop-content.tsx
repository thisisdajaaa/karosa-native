import React from "react";
import { FlatList, View } from "react-native";
import { ListChevron } from "@app/components/list/list-chevron";
import { BuyerCard } from "@app/components/cards/product";

import { styles } from "./styles";

const ShopContent: React.FC = () => {
  const mockData = [
    {
      id: 1,
      name: "Banana Product two line",
    },
    { id: 2, name: "Banana Product two line " },
  ];

  return (
    <React.Fragment>
      <FlatList
        numColumns={2}
        data={mockData}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <React.Fragment>
            <View style={styles.voucherContainer} />
            <ListChevron
              title={"Selection for you"}
              txtInfo={"See All"}
              onPress={() => console.log("chevron pressed")}
              iconStyle={styles.chevronIcon}
              txtInfoStyle={styles.txtChevronInfo}
            />
          </React.Fragment>
        }
        columnWrapperStyle={styles.contentCenter}
        renderItem={({ item }: any) => <BuyerCard item={item} />}
      />
    </React.Fragment>
  );
};

export default ShopContent;
