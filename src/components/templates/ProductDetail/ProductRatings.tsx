import { Pressable, View } from "react-native";
import React, { FC } from "react";
import Text from "@app/atoms/Text";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import Rating from "@app/atoms/Rating";
import Reviews from "@app/molecules/Reviews";
import { DUMMY_REVIEWS } from "./config";
import { MaterialIcons } from "@expo/vector-icons";

const ProductRatings: FC = () => {
  return (
    <View style={{ marginTop: 12 }}>
      <ListItem
        onPress={() => alert("g")}
        containerStyle={{ flexDirection: "column", alignItems: "stretch" }}
        bottomDivider
      >
        <ListItem.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text
            text="Ratings and Reviews"
            textStyle={{ ...theme.textSemiBold, marginRight: 4 }}
          />
          <Text
            text="(60)"
            textStyle={{ ...theme.textSemiBold, color: theme.colors.dark30 }}
          />

          <Text
            text="See All"
            textStyle={{
              ...theme.textRegular,
              color: theme.colors.primary,
              marginLeft: "auto",
            }}
          />
          <ListItem.Chevron iconStyle={{ color: theme.colors.primary }} />
        </ListItem.Content>
        <ListItem.Content
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingTop: 8,
          }}
        >
          <Rating ratingCount={5} readonly imageSize={10} startingValue={5} />
        </ListItem.Content>
      </ListItem>

      {DUMMY_REVIEWS.slice(0, 3).map((review, index) => (
        <Reviews
          key={index}
          hasBottomDivider={index !== DUMMY_REVIEWS.length - 1}
          date={review.date}
          variation={review.variation}
          rate={review.rate}
          username={review.username}
          overlay={review.overlay}
          feedback={review.feedback}
          avatarPhoto={review.avatarPhoto}
        />
      ))}

      <View
        style={{
          backgroundColor: theme.colors.white,
          padding: 14,
          alignItems: "flex-end",
        }}
      >
        <Pressable
          onPress={() => alert("g")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            text="See All Reviews (60)"
            textStyle={{ ...theme.textRegular, color: theme.colors.primary }}
          />
          <MaterialIcons
            name="navigate-next"
            size={20}
            color={theme.colors.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductRatings;
