/**
 *
 * AddressNewTemplate
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import { useNavigation } from "@react-navigation/native";
import { KeyboardTypeOptions, View } from "react-native";
import Header from "@app/components/molecules/Header";

import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import { ListItem } from "react-native-elements";
import Icon from "@app/atoms/Icon";
import ListInput from "@app/components/organisms/ListInput";
import { COMMON } from "@app/constants";
import Button from "@app/atoms/Button";
import { useFormikContext } from "formik";
import { NewAddressForm } from "@app/redux/address/models";
import { WithIcon } from "@app/utils";

const AddressNewTemplate: FC<PropsType> = (props) => {
  const { details, latitude, longitude } = props;
  const { goBack, navigate } = useNavigation();
  const { submitForm, values } = useFormikContext<NewAddressForm>();

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    keyboardType?: KeyboardTypeOptions
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.TWO}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    );
  };

  return (
    <View>
      <View>
        <Header
          barStyle="light-content"
          leftComponent={{
            icon: "arrow-back",
            color: "green",
            onPress: goBack,
          }}
          centerComponent={<Text text={"New Address"}></Text>}
          hasBottomDivider={true}
        />
        <ListItem bottomDivider={true}>
          <Text text={details} />
          <Icon group="accountSettings" name={"fb"} width={20} height={20} />
        </ListItem>
      </View>
      <View>
        <ListInput
          name={"label"}
          label={"Label"}
          placeholder={"e.g. Home / Office"}
          hasBottomDivider
          maxLen={10}
          required
          variation={COMMON.VARIATION.FOUR}
        />
        <ListInput
          name={"contactName"}
          label={"Contact Name"}
          placeholder={"Set Name"}
          hasBottomDivider
          required
          variation={COMMON.VARIATION.FOUR}
        />
        <ListInput
          name={"contactNumber"}
          label={"Contact Number"}
          placeholder={"Set Contact"}
          hasBottomDivider
          required
          variation={COMMON.VARIATION.FOUR}
        />
        <ListInput
          name={"addressDetails"}
          label={"Address Details"}
          placeholder={"e.g. Floor, Unit, Room Number"}
          hasBottomDivider
          required
          maxLen={20}
          variation={COMMON.VARIATION.ONE}
        />
        <ListInput
          name={"noteRider"}
          label={"Note to rider"}
          placeholder={"e.g. Landmark, Buidling"}
          hasBottomDivider
          required
          maxLen={20}
          variation={COMMON.VARIATION.ONE}
        />
      </View>
      <View
        style={{
          alignContent: "flex-end",
          bottom: 0,
          width: "100%",
          padding: "5%",
        }}>
        <Button
          title={"Save address"}
          buttonStyle={{ backgroundColor: theme.colors.primary }}
          titleStyle={{ fontSize: 16 }}
          onPress={submitForm}></Button>
      </View>
    </View>
  );
};
export default AddressNewTemplate;
