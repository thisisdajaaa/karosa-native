import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { equals } from "ramda";
import { batch, useDispatch } from "react-redux";
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
import { ListIterator } from "@app/components/list/list-iterator";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { initShopState } from "@app/redux/shop/data";
import { AddProductRequest, ProductForm } from "@app/redux/shop/models";
import routes from "@app/navigators/routes";

import ProductStatusModal from "../product-status";
import AvailabilityModal from "../availability";
import MeasurementModal from "../measurement";

import { validationSchema } from "./validation";
import { styles } from "./styles";

const AddProductScreen: React.FC = () => {
  const dispatch = useDispatch();

  const productStatusRef = useRef<RBSheet>(null);
  const availabilityRef = useRef<RBSheet>(null);
  const measurementRef = useRef<RBSheet>(null);

  const { goBack, navigate } = useNavigation();

  const [submitted, setSubmitted] = useState(false);

  const callAddProductApi = useCallback(
    (request: AddProductRequest) =>
      dispatch(actions.callAddProductApi.request(request)),
    [dispatch]
  );

  const clearProductEntry = useCallback(
    () => dispatch(actions.clearProductEntry()),
    [dispatch]
  );

  const setProductForm = useCallback(
    (values: ProductForm) => dispatch(actions.setProductForm(values)),
    [dispatch]
  );

  const productForm = useMemoizedSelector(selectors.getProductForm);
  const productStatus = useMemoizedSelector(selectors.getProductStatus);

  const addProductResponse = useMemoizedSelector(
    selectors.getAddProductResponse
  );

  const successResponse = useMemo(() => {
    return (
      !addProductResponse.isLoading &&
      !equals(
        addProductResponse.response,
        initShopState.addProductResponse.response
      )
    );
  }, [addProductResponse.isLoading, addProductResponse.response]);

  useEffect(() => {
    if (successResponse)
      if (submitted) {
        goBack();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successResponse]);

  const formikBag = useFormik({
    initialValues: productForm,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      batch(() => {
        callAddProductApi({
          name: values.productNm,
          categoryId: productForm.categoryId,
          description: values.description,
        });
        setProductForm(values);
        clearProductEntry();
      });

      setSubmitted(true);
    },
  });

  const status = useMemo(() => {
    if (productStatus.harvesting)
      return { value: "Harvesting", color: theme.colors.gold5 };

    if (productStatus.planting)
      return { value: "Planting", color: theme.colors.dark5 };

    return { value: "Available", color: theme.colors.primary };
  }, [productStatus]);

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
          onPress: formikBag.submitForm,
          style: {
            ...theme.textRegular,
            fontWeight: "400",
            color: theme.colors.dark10,
          },
        }}
      />
    ),
    isLoading: addProductResponse.isLoading,
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
        maxLength={name === "productNm" ? 100 : 1000}
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
        color={status.color}
        value={status.value}
      />
    );
  };

  const listSwitch = () => (
    <ListSwitch title={"Pre-order"} hasBottomDivider name={"preOrder"} />
  );

  const listImage = () => <ListImage name={"productImg"} hasBottomDivider />;

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const statusCb = () => productStatusRef.current?.open();
    const availabilityCb = () => availabilityRef.current?.open();
    const measurementCb = () => measurementRef.current?.open();
    const variationCb = () => navigate(routes.ADD_VARIATION);
    const wholesaleCb = () => navigate(routes.ADD_WHOLESALE);
    const shippingDetCb = () => navigate(routes.SHIPPING_DETAILS);
    const categoryCb = () => navigate(routes.CHOOSE_CATEGORY);

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

    const categories = listChevron("Categories", true, categoryCb);
    const unit = listChevron("Unit of Measurement", true, measurementCb);
    const availability = listChevron("Availability", false, availabilityCb);
    const variation = listChevron("Variation", false, variationCb);
    const wholesale = listChevron("Wholesale", false, wholesaleCb);
    const shippingDetails = listChevron(
      "Shipping Details",
      false,
      shippingDetCb
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

    return ListIterator(elements);
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
        <MeasurementModal sheetRef={measurementRef} />
      </Screen>
    </FormikContext.Provider>
  );
};

export default AddProductScreen;
