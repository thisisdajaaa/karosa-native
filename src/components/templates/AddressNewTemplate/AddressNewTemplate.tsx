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
import AddressNewTemplateStyles from "./styles";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

const AddressNewTemplate: FC<PropsType> = (props) => {
  const { details, inputProps } = props;
  const { goBack, navigate } = useNavigation();
  const { submitForm, values, errors } = useFormikContext<NewAddressForm>();

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
        <View style={AddressNewTemplateStyles.subContainer}>
          <ListItem bottomDivider={true}>
            <ListItem.Content style={AddressNewTemplateStyles.listContainer}>
              <Icon
                group="accountSettings"
                name={"address_pointer"}
                width={20}
                height={20}
              />
              <Text text={details} />
            </ListItem.Content>

            <View style={AddressNewTemplateStyles.infoContainerWithoutChevron}>
              <Icon
                group="accountSettings"
                name={"edit"}
                width={20}
                height={20}
              />
            </View>
          </ListItem>
        </View>
      </View>
      <View style={AddressNewTemplateStyles.subContainer}>
        {inputProps.map((props, index) => {
          return (
            <>
              <ListInput
                name={props.name}
                label={props.label}
                placeholder={props.placeholder}
                hasBottomDivider
                required
                maxLen={props.maxLen}
                variation={props.variation}
                keyboardType={
                  props.keyboardType ? props.keyboardType : "default"
                }
              />
            </>
          );
        })}
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
          buttonStyle={
            errors.contactName || errors.contactNumber
              ? { backgroundColor: theme.colors.dark10 }
              : { backgroundColor: theme.colors.primary }
          }
          titleStyle={{ fontSize: 16 }}
          onPress={submitForm}></Button>
      </View>
    </View>
  );
};
export default AddressNewTemplate;
