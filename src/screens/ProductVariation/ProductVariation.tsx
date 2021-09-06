/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useFormik, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { VariationForm, VariationItem } from "@app/redux/shop/models";
import ProductVariationTemplate from "@app/templates/ProductVariation";

const data = [
  // {
  //   variationName: "Random1",
  //   hasImage: true,
  //   options: [
  //     {
  //       image: require("../../../assets/hinata.png"),
  //       optionName: "lmao1",
  //     },
  //   ],
  // },
  // {
  //   variationName: "Random2",
  //   hasImage: true,
  //   options: [
  //     {
  //       image: require("../../../assets/hinata.png"),
  //       optionName: "lmao12",
  //     },
  //   ],
  // },
  // {
  //   variationName: "Random3",
  //   hasImage: true,
  //   options: [
  //     {
  //       image: require("../../../assets/hinata.png"),
  //       optionName: "lmao13",
  //     },
  //   ],
  // },
] as VariationItem[];

const ProductVariationScreen: FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const variationForm = useMemoizedSelector(selectors.getVariationForm);

  const setVariationForm = useCallback(
    (values: VariationForm) => dispatch(actions.setVariationForm(values)),
    [dispatch]
  );

  const handleSubmit = (values: VariationForm) => {
    setVariationForm({ ...values });
    goBack();
  };

  const formikBag = useFormik({
    initialValues: { variationData: data },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <FormikProvider value={formikBag}>
      <ProductVariationTemplate onBack={handleBack} />
    </FormikProvider>
  );
};

export default ProductVariationScreen;
