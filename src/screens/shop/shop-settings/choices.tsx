import React, { useCallback, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MultiList } from "@app/components/multi-list";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { theme } from "@app/styles";
import routes from "@app/navigators/routes";
import RBSheet from "react-native-raw-bottom-sheet";
import { useMemoizedSelector } from "@app/hooks";
import selectors from "@app/redux/shop/selectors";

import DeleteShopModal from "../delete-shop";
import ShopStatusModal from "../shop-status";

import { itemStyle, styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import { AddressInputProps } from "@app/components/list/list-address/types";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";
import { FormInput } from "@app/components/formik/form-input";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";

import { validationSchema } from "./validation";
import { FormikContext, useFormik } from "formik";
import { AddressInput } from "@app/components/list/list-address";

const Choices = () => {
  const { navigate } = useNavigation();
  const deleteShopRef = useRef<RBSheet>(null);
  const shopStatusRef = useRef<RBSheet>(null);
  const [viewShopStatus, setShopStatus] = useState("");
  const [shopStatusBG, setShopStatusBG] = useState(theme.colors.primary);
  // const [inputShopName, setInputShopName] = useState(false);
  const shopStatus = useMemoizedSelector(selectors.getShopStatus);

  const shopResponse = useMemoizedSelector(selectors.getShopResponse);

  useEffect(() => {
    if (shopStatus.available) {
      setShopStatus("Available");
      setShopStatusBG(theme.colors.primary);
    } else if (shopStatus.harvesting) {
      setShopStatus("Harvesting");
      setShopStatusBG(theme.colors.dark5);
    } else {
      setShopStatus("Planting");
      setShopStatusBG(theme.colors.gold5);
    }
  }, [shopStatus]);

  const handleSubmit = useCallback(() => {
    try {
      // const request: ForgotRequest = {
      //   identifier: formikBag.values.identifier,
      // };

      console.log(formikBag.values.identifier);

      // if (!formikBag.dirty) callForgotApi(request);
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formikBag = useFormik({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const commonItem = (bgColor: string, text: string) => (
    <React.Fragment>
      <View style={styles.itemContainer}>
        <View style={itemStyle(bgColor).circle} />
        <BaseText style={styles.txtLabel}>{text}</BaseText>
      </View>
      <Separator containerStyle={styles.separator} />
    </React.Fragment>
  );
  // const shopNameText = () => (

  //   <BaseText style={styles.setDetailStyle}>
  //   Set Shop name
  // </BaseText>

  // );

  // const inputShopNameText = () => (
  //    <FormikContext.Provider value={formikBag}>
  //             <View style={styles.itemContainer}>
  //               <FormInput {...identifierProps} />
  //             </View>
  //           </FormikContext.Provider>
  // )

  const identifierProps: AddressInputProps = {
    addressInput: {
      name: "identifier",
      placeholder: "Set Shop Name",
    },
  };
  const multiListUpperProps: MultiListProps = {
    multiAction: [
      {
        // style: {
        //   containerStyle: styles.actionContainer,
        //   textStyle: {
        //     left: styles.txtLogo,
        //   },
        // },
        onClick: () => {
          // shopStatusRef.current?.close(); 
        
        },

        structure: {
          LeftComponent: (
            <BaseText style={styles.txtLabel}>{"Shop Name"}</BaseText>
          ),
          RightComponent: (
            <FormikContext.Provider value={formikBag}>
              {/* <View style={styles.itemContainer}>
                <FormInput {...identifierProps} />
              </View> */}
               <AddressInput {...identifierProps} />
            </FormikContext.Provider>
          ),
        },

        hasSeparator: true,
      },

      {
        style: {
          containerStyle: styles.actionContainer,
          textStyle: {
            left: styles.txtLogo,
          },
        },
        onClick: () => {
          shopStatusRef.current?.open();
        },

        structure: {
          LeftComponent: (
            <BaseText style={styles.txtLabel}>{"Shop Status"}</BaseText>
          ),
          RightComponent: commonItem(shopStatusBG, viewShopStatus),
        },

        hasSeparator: true,
      },
    ],
  };

  const multiListLowerProps: MultiListProps = {
    multiChev: [
      {
        title: "Shop Address",

        rightLabel: shopResponse.response.shopAddress,
        hasSeparator: true,
        onPress: () => navigate(routes.SHOP_ADDRESS),
      },
      {
        title: "Payment Option",

        onPress: () => navigate(routes.PAYMENT_OPTIONS),
        hasSeparator: true,
      },
      {
        title: "Delete Shop",

        onPress: () => deleteShopRef.current?.open(),
        hasSeparator: true,
      },
    ],
  };

  return (
    <View style={styles.choicesContainer}>
      <MultiList {...multiListUpperProps} />
      <MultiList {...multiListLowerProps} />
      <DeleteShopModal sheetRef={deleteShopRef} />
      <ShopStatusModal sheetRef={shopStatusRef} />
    </View>
  );
};

export default Choices;
