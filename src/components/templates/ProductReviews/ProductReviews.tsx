/**
 *
 * ProductReviews
 * @format
 *
 */

import React, { FC, useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { theme } from "@app/styles";
import Header from "@app/molecules/Header";
import Reviews from "@app/molecules/Reviews";

import type { FilterType, PropsType } from "./types";
import { DUMMY_FILTERS, DUMMY_REVIEWS } from "./config";
import ProductReviewsStyles from "./styles";
import FilterChip from "./FilterChip";

const ProductReviews: FC<PropsType> = (props) => {
  const { onBack } = props;

  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Ratings and Reviews (60)",
          style: ProductReviewsStyles.txtHeader,
        }}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={DUMMY_REVIEWS}
        ListHeaderComponent={
          <View style={ProductReviewsStyles.listHeader}>
            {DUMMY_FILTERS.map((item, index) => (
              <FilterChip
                key={index}
                text={item.rating ? undefined : item.text}
                rating={item.rating}
                total={item.total}
                onPress={() => setSelectedFilter(item.text as FilterType)}
                selected={selectedFilter === item.text}
              />
            ))}
          </View>
        }
        renderItem={({ item, index }) => (
          <Reviews
            key={index}
            hasBottomDivider
            date={item.date}
            variation={item.variation}
            rate={item.rate}
            username={item.username}
            overlay={item.overlay}
            feedback={item.feedback}
            avatarPhoto={item.avatarPhoto}
          />
        )}
      />
    </>
  );
};

export default ProductReviews;
