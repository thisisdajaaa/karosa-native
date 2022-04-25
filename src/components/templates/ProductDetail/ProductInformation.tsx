/**
 *
 * ProductInformation
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { noop } from "lodash";
import { theme } from "@app/styles";
import { COMMON } from "@app/constants";
import { ListItem } from "react-native-elements";
import ListChevron from "@app/organisms/ListChevron";
import ExpandableText from "@app/molecules/ExpandableText";
import Text from "@app/atoms/Text";

import { ProductInformationStyles } from "./styles";

const ProductInformation: FC = () => {
  return (
    <View style={ProductInformationStyles.container}>
      <Text
        text="Product Details"
        textStyle={ProductInformationStyles.txtDetails}
      />

      <ListItem
        bottomDivider
        containerStyle={ProductInformationStyles.listContainer}
      >
        <ListItem.Content>
          <Text text="Stock" textStyle={ProductInformationStyles.txtRegular} />
        </ListItem.Content>

        <Text text="50" textStyle={ProductInformationStyles.txtValue} />
      </ListItem>

      <ListChevron
        onPress={noop}
        chevronColor={theme.colors.primary}
        variation={COMMON.VARIATION.ONE}
        containerStyle={ProductInformationStyles.listContainer}
        info="Region's Best"
        infoStyle={ProductInformationStyles.info}
        title="Category"
        titleStyle={ProductInformationStyles.txtRegular}
        hasBottomDivider
      />

      <ListItem
        bottomDivider
        containerStyle={ProductInformationStyles.listContainer}
      >
        <ListItem.Content>
          <Text
            text="Ships From"
            textStyle={ProductInformationStyles.txtRegular}
          />
        </ListItem.Content>

        <Text
          text="Cebu, Visayas"
          textStyle={ProductInformationStyles.txtValue}
        />
      </ListItem>

      <ListItem containerStyle={ProductInformationStyles.expandableContainer}>
        <ListItem.Content>
          <ExpandableText
            text="Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa  quae ab illo inventore veritatis. unde omnis iste natus error sit voluptatem accusa"
            readMoreStyle={ProductInformationStyles.txtReadMore}
          />
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ProductInformation;
