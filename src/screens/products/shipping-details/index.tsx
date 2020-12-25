import React, { useCallback } from "react";
import { Header, ListItem } from "react-native-elements";
import { View } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ListInput } from "@app/components/list/list-input";
import { ListIterator } from "@app/components/list/list-iterator";
import { ListSwitch } from "@app/components/list/list-switch";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { ShippingDetailsForm } from "@app/redux/shop/models";

import { validationSchema } from "./validation";
import { styles } from "./styles";

const ShippingDetailsScreen: React.FC = () => {
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
          text: "Shipping Details",
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

  const setShippingDetailsForm = useCallback(
    (values: ShippingDetailsForm) =>
      dispatch(actions.setShippingDetailsForm(values)),
    [dispatch]
  );

  const shippingDetailsForm = useMemoizedSelector(
    selectors.getShippingDetailsForm
  );

  const formikBag = useFormik({
    initialValues: shippingDetailsForm,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      setShippingDetailsForm(values);
      goBack();
    },
  });

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    required: boolean
  ): JSX.Element => {
    return (
      <ListInput
        isRow
        hasBottomDivider
        required={required}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listSwitch = (
    name: string,
    title: string,
    extraInfo: string | undefined,
    disabled: boolean
  ): JSX.Element => {
    return (
      <ListSwitch
        boldTitle={title}
        name={name}
        hasBottomDivider
        extraInfo={extraInfo}
        disabled={disabled}
      />
    );
  };

  const inputDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const width = listInput("width", "Width (cm)", "Set", false);
    const length = listInput("length", "Length (cm)", "Set", false);
    const height = listInput("height", "Height (cm)", "Set", false);

    elements.push(width, length, height);

    return ListIterator(elements);
  };

  const switchDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const noWeight = !formikBag.values.weight;

    const expressDelivery = listSwitch(
      "expressDelivery",
      "Express Delivery",
      "(Weight Required)",
      noWeight
    );
    const karosaDelivery = listSwitch(
      "karosaDelivery",
      "Karosa Delivery",
      "(Weight Required)",
      noWeight
    );
    const pickUpBuyer = listSwitch(
      "pickUpBuyer",
      "Pick Up by Buyer",
      undefined,
      false
    );
    const sellerCourier = listSwitch(
      "sellerCourier",
      "Seller Own Courier",
      undefined,
      false
    );

    elements.push(expressDelivery, karosaDelivery, pickUpBuyer, sellerCourier);

    return ListIterator(elements);
  };

  const saveButtonProps: SubmitButtonProps = {
    title: "Save",
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <React.Fragment>
          {listInput("weight", "Weight per product", "Set Weight", true)}
        </React.Fragment>

        <View style={styles.separator} />

        <ListItem bottomDivider>
          <ListItem.Title style={styles.txtPackaging}>
            Packaging Size
          </ListItem.Title>
        </ListItem>

        <React.Fragment>{inputDisplay()}</React.Fragment>

        <View style={styles.separator} />

        <React.Fragment>{switchDisplay()}</React.Fragment>

        <View style={styles.buttonContainer}>
          <SubmitButton {...saveButtonProps} />
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};

export default ShippingDetailsScreen;
