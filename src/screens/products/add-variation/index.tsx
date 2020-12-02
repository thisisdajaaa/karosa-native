import React, { useCallback } from "react";
import { Header } from "react-native-elements";
import { View } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ListInput } from "@app/components/list/list-input";
import { ListImage } from "@app/components/list/list-image";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { VariationForm } from "@app/redux/shop/models";

import { validationSchema } from "./validation";
import { styles } from "./styles";

const AddVariationScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        containerStyle={{ backgroundColor: "transparent" }}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "Add Variation",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
      />
    ),
    customStyles: styles.container,
  };

  const setVariationForm = useCallback(
    (values: VariationForm) => dispatch(actions.setVariationForm(values)),
    [dispatch]
  );

  const variationForm = useMemoizedSelector(selectors.getVariationForm);

  const formikBag = useFormik({
    initialValues: variationForm,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      setVariationForm(values);
      goBack();
    },
  });

  const listInput = (
    name: string,
    orientation: string,
    label: string,
    placeholder: string
  ): JSX.Element => {
    return (
      <ListInput
        isColumn={orientation === "column" ? true : false}
        isRow={orientation === "row" ? true : false}
        hasBottomDivider
        required
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listImage = () => <ListImage name={"variationImg"} hasBottomDivider />;

  const listIterator = (listItems: React.ReactElement[]) => {
    return listItems.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const price = listInput("price", "row", "Price", "Set price per product");
    const stocks = listInput("stocks", "row", "Stocks", "Set Stock");
    const productNm = listInput(
      "productNm",
      "column",
      "Product Name",
      "Enter Product Name"
    );
    const weight = listInput(
      "weight",
      "row",
      "Weight per product",
      "Set Weight"
    );

    elements.push(listImage(), productNm, price, weight, stocks);

    return listIterator(elements);
  };

  const saveButtonProps: SubmitButtonProps = {
    title: "Save",
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <React.Fragment>{listDisplay()}</React.Fragment>

        <View style={styles.buttonContainer}>
          <SubmitButton {...saveButtonProps} />
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};

export default AddVariationScreen;
