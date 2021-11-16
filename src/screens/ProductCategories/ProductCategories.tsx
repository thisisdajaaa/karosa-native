/**
 *
 * ProductCategories
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import ProductCategoriesTemplate from "@app/templates/ProductCategories";
import routes from "@app/navigators/routes";

const ProductCategoriesScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();

  const categoryList = useMemoizedSelector(selectors.getCategoryListResponse);

  const setCategory = useCallback(
    (values: number) => dispatch(actions.setCategory(values)),
    [dispatch]
  );

  const handleCategory = (value: number) => {
    setCategory(value);
    navigate(routes.PRODUCT_ADD);
  };

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <ProductCategoriesTemplate
      onBack={handleBack}
      categoryList={categoryList.response}
      onCategory={handleCategory}
    />
  );
};

export default ProductCategoriesScreen;
