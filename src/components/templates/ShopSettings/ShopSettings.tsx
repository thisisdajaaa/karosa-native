/**
 *
 * ShopSettings
 * @format
 *
 */

import React, { FC, Fragment, ReactElement } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { theme } from "@app/styles";
import { COMMON } from "src/constants";
import { getPlatform, listIterator } from "@app/utils";
import type { PropsType as ListChevronType } from "@app/organisms/ListChevron/types";
import type { PropsType as ListInputType } from "@app/organisms/ListInput/types";
import type { PropsType as ListStatusType } from "@app/organisms/ListStatus/types";
import { ShopSettingsForm } from "@app/redux/shop/models";
import Header from "@app/molecules/Header";
import FormImagePicker from "@app/molecules/FormImagePicker";
import ListInput from "@app/organisms/ListInput";
import ListStatus from "@app/organisms/ListStatus";
import ListChevron from "@app/organisms/ListChevron";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";
import ListTimeRange from "@app/organisms/ListTimeRange";
import validationSchema from "@app/screens/ShopSettings/validation";

import type { PropsType } from "./types";
import ShopSettingsStyles from "./styles";
import { useFormikContext } from "formik";
import { ListItem } from "react-native-elements";
import Icon from "@app/atoms/Icon";
import { ICON_SIZE } from "./config";

const ShopSettingsTemplate: FC<PropsType> = (props) => {
  const {
    shopSettingRefs,
    shopFieldsData,
    navigation,
    submitForm,
    handleNewAddress,
  } = props;

  const { shopStatusRef, shopDeleteRef } = shopSettingRefs;
  const { statusColor, statusValue, addressDetails, hasAddress } =
    shopFieldsData;

  const { values } = useFormikContext<ShopSettingsForm>();

  const isValid = validationSchema.isValidSync(values);

  const isIOS = getPlatform.getInstance() === "ios";

  const shopNameProps: ListInputType = {
    name: "shopName",
    label: "Shop Name",
    placeholder: "Set Shop Name",
    hasBottomDivider: true,
    variation: COMMON.VARIATION.TWO,
  };

  const emailProps: ListInputType = {
    name: "email",
    label: "Email",
    placeholder: "Set Email",
    hasBottomDivider: true,
    variation: COMMON.VARIATION.TWO,
  };

  const shopStatusProps: ListStatusType = {
    label: "Shop Status",
    onPress: () => shopStatusRef.current?.open(),
    hasBottomDivider: true,
    color: statusColor,
    value: statusValue,
  };

  const shopPaymentProps: ListChevronType = {
    title: "Payment Option",
    variation: COMMON.VARIATION.ONE,
    hasBottomDivider: true,
    onPress: navigation.onPayment,
  };

  const getHeader = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Header
          leftComponent={{
            icon: "arrow-back",
            color: theme.colors.primary,
            onPress: navigation.onBack,
          }}
          centerComponent={{
            text: "Shop Settings",
            style: ShopSettingsStyles.txtHeader,
          }}
          rightComponent={
            <Pressable onPress={submitForm} disabled={!isValid}>
              <Text
                text="Save"
                textStyle={
                  !isValid
                    ? ShopSettingsStyles.txtSaveDisabled
                    : ShopSettingsStyles.txtSave
                }
              />
            </Pressable>
          }
        />
      </>
    );
  };

  const getImageForm = () => {
    return (
      <>
        <FormImagePicker name="coverPhoto" variation={COMMON.VARIATION.THREE} />
        <View style={ShopSettingsStyles.avatarContainer}>
          <FormImagePicker
            name="avatarPhoto"
            variation={COMMON.VARIATION.TWO}
          />
        </View>
        <View style={ShopSettingsStyles.spacer} />
      </>
    );
  };

  const shopAddress = !hasAddress ? (
    <Fragment />
  ) : (
    <ListItem
      bottomDivider={true}
      containerStyle={ShopSettingsStyles.listStart}
      style={ShopSettingsStyles.addressMargin}
    >
      <Icon
        group="accountSettings"
        name="addressPin"
        width={ICON_SIZE.SM}
        height={ICON_SIZE.SM}
      />
      <ListItem.Content style={ShopSettingsStyles.listStart}>
        <View style={ShopSettingsStyles.flexRow}>
          <Text
            text={addressDetails.label}
            textStyle={ShopSettingsStyles.addressLabel}
          />
        </View>

        <Text
          text={`${addressDetails.contactName}, ${addressDetails.contactNumber}`}
          textStyle={ShopSettingsStyles.txtSubAddress}
        />
        <Text
          text={addressDetails.coords.location}
          textStyle={ShopSettingsStyles.txtSubAddress}
        />
        <Text
          text={`Note to rider: ${
            addressDetails.noteRider ? addressDetails.noteRider : "None"
          }`}
          textStyle={ShopSettingsStyles.txtSubAddress}
        />
      </ListItem.Content>

      <Pressable onPress={navigation.onAddress}>
        <Icon
          group="accountSettings"
          name={"edit"}
          width={ICON_SIZE.SM}
          height={ICON_SIZE.SM}
        />
      </Pressable>
    </ListItem>
  );

  const getListForm = () => {
    const elements: ReactElement[] = [];

    const shopName = <ListInput {...shopNameProps} />;
    const email = <ListInput {...emailProps} />;
    const shopStatus = <ListStatus {...shopStatusProps} />;
    const shopPayment = <ListChevron {...shopPaymentProps} />;

    const shopTime = (
      <ListTimeRange
        label="Shop Hours"
        startName="startTime"
        endName="endTime"
        hasBottomDivider
      />
    );

    elements.push(
      shopName,
      email,
      shopStatus,
      shopTime,
      shopPayment,
      shopAddress
    );

    return listIterator(elements);
  };

  const getBtnDeleteShop = () => {
    return (
      <View style={ShopSettingsStyles.mainButtonContainer}>
        {!hasAddress && (
          <>
            <Button
              onPress={handleNewAddress}
              title="Add Shop Address"
              buttonStyle={ShopSettingsStyles.btnAddShop}
              titleStyle={ShopSettingsStyles.txtBtnAddShop}
            />

            <View style={ShopSettingsStyles.btnSpacer} />
          </>
        )}

        <Button
          onPress={() => shopDeleteRef.current?.open()}
          title="Delete Shop"
          buttonStyle={ShopSettingsStyles.subButtonContainer}
          titleStyle={ShopSettingsStyles.txtBtnDelete}
        />
      </View>
    );
  };

  const getContent = () => {
    return (
      <KeyboardAvoidingView
        style={ShopSettingsStyles.container}
        behavior={isIOS ? "padding" : undefined}
      >
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <>{getImageForm()}</>
          <>{getListForm()}</>
        </ScrollView>
        <>{getBtnDeleteShop()}</>
      </KeyboardAvoidingView>
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <>{getContent()}</>
    </>
  );
};

export default ShopSettingsTemplate;
