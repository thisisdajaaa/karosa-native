import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { ScrollView, View } from "react-native";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ListImage } from "@app/components/list/list-image";
import { ListInput } from "@app/components/list/list-input";
import { ListChevron } from "@app/components/list/list-chevron";
import { ListSwitch } from "@app/components/list/list-switch";
import { ListStatus } from "@app/components/list/list-status";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ProductForm } from "@app/redux/shop/models";
import routes from "@app/navigators/routes";

import ProductStatusModal from "../product-status";
import AvailabilityModal from "../availability";

import { styles } from "./styles";

const AddProductsScreen: React.FC = () => {
  const dispatch = useDispatch();

  const productStatusRef = useRef<RBSheet>(null);
  const availabilityRef = useRef<RBSheet>(null);
  const { goBack, navigate } = useNavigation();

  const setProductForm = useCallback(
    (values: ProductForm) => dispatch(actions.setProductForm(values)),
    [dispatch]
  );

  const clearProductEntry = useCallback(
    () => dispatch(actions.clearProductEntry()),
    [dispatch]
  );

  const productForm = useMemoizedSelector(selectors.getProductForm);

  const formikBag = useFormik({
    initialValues: productForm,
    onSubmit: (values) => {
      setProductForm(values);
    },
  });

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        containerStyle={{ backgroundColor: "transparent" }}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: () => {
            goBack();
            clearProductEntry();
          },
        }}
        centerComponent={{
          text: "Add Product",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
        rightComponent={{
          text: "Save",
          style: {
            fontSize: 16,
            lineHeight: 19,
            fontWeight: "400",
            color: "#BDBDBD",
          },
          onPress: formikBag.submitForm,
        }}
      />
    ),
    customStyles: styles.container,
  };

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

  const listChevron = (
    title: string,
    required: boolean,
    onPress: VoidFunction
  ): JSX.Element => {
    return (
      <ListChevron
        title={title}
        required={required}
        onPress={onPress}
        hasBottomDivider
      />
    );
  };

  const listStatus = (statusCb: VoidFunction) => {
    return (
      <ListStatus
        hasBottomDivider
        title={"Status"}
        required
        onPress={statusCb}
        value={"Available"}
      />
    );
  };

  const listSwitch = () => (
    <ListSwitch title={"Pre-order"} hasBottomDivider name={"preOrder"} />
  );

  const listImage = () => <ListImage name={"productImg"} hasBottomDivider />;

  const listIterator = (listItems: React.ReactElement[]) => {
    return listItems.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const availabilityCb = () => availabilityRef.current?.open();
    const statusCb = () => productStatusRef.current?.open();
    const variationCb = () => navigate(routes.ADD_VARIATION);
    const wholesaleCb = () => navigate(routes.ADD_WHOLESALE);

    const price = listInput("price", "row", "Price", "Set price per product");
    const stocks = listInput("stocks", "row", "Stocks", "Set Stock");
    const productNm = listInput(
      "productNm",
      "column",
      "Product Name",
      "Enter Product Name"
    );
    const description = listInput(
      "description",
      "column",
      "Description",
      "Enter Description"
    );
    const shelfLife = listInput(
      "shelfLife",
      "row",
      "Shelf Life",
      "Set Shelf Life"
    );
    const weight = listInput(
      "weight",
      "row",
      "Weight per product",
      "Set Weight"
    );

    const categories = listChevron("Categories", true, () => alert("MIKAY"));
    const unit = listChevron("Unit of Measurement", true, () => alert("MIKAY"));
    const availability = listChevron("Availability", false, availabilityCb);
    const variation = listChevron("Variation", false, variationCb);
    const wholesale = listChevron("Wholesale", false, wholesaleCb);
    const shippingDetails = listChevron("Shipping Details", false, () =>
      alert("MIKAY")
    );

    elements.push(
      listImage(),
      productNm,
      description,
      categories,
      price,
      unit,
      weight,
      stocks,
      shelfLife,
      listStatus(statusCb),
      availability,
      variation,
      wholesale,
      listSwitch(),
      shippingDetails
    );

    return listIterator(elements);
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <ScrollView>
          <React.Fragment>{listDisplay()}</React.Fragment>
          <View style={styles.spacer} />
        </ScrollView>

        <ProductStatusModal sheetRef={productStatusRef} />
        <AvailabilityModal sheetRef={availabilityRef} />
      </Screen>
    </FormikContext.Provider>
  );
};

export default AddProductsScreen;
