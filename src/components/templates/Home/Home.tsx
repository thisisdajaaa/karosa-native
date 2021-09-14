/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
// import Header from "@app/molecules/Header";

import HomeStyles from "./styles";
import Image from "@app/atoms/Image";
import { AntDesign } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import { categories, productCategories } from "./config";
import { TouchableOpacity } from "react-native-gesture-handler";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

const HomeTemplate: FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={HomeStyles.scrollviewContainer}>
        <View>
          <View>
            <Image
              source={{
                uri: "https://squadstate.com/wp-content/uploads/2020/03/ancient-apparition.jpg",
              }}
              imageStyle={HomeStyles.productImage}
            />
            <AntDesign
              name="ellipsis1"
              size={30}
              style={HomeStyles.iconStyleEllipsis}
            />
          </View>
        </View>
        <View style={{ height: "15%" }}>
          <FlatList
            numColumns={1}
            data={categories}
            horizontal={true}
            windowSize={200}
            renderItem={({ item }: { item: any }) => (
              <TouchableOpacity
                style={HomeStyles.categoriesCard}
                onPress={() => console.log("testing")}>
                <Icon group={"home"} name={item.code} width={50} height={50} />
                <Text text={item.name} textStyle={HomeStyles.categoriesText} />
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Text
            text={"tO INSERT Carousel"}
            textStyle={HomeStyles.categoriesText}
          />
        </View>
        <View>
          <Text text={"Categories"} />
          <FlatList
            numColumns={1}
            data={productCategories}
            horizontal={true}
            windowSize={200}
            renderItem={({ item }: { item: any }) => (
              <TouchableOpacity
                style={HomeStyles.categoriesCard}
                onPress={() => console.log("testing")}>
                <Icon
                  group={"wishlist"}
                  name={item.code}
                  width={50}
                  height={50}
                />
                <Text text={item.name} textStyle={HomeStyles.categoriesText} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeTemplate;
