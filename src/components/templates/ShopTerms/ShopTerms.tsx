/**
 *
 * ShopTerms
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import Header from "@app/molecules/Header";

import type { PropsType } from "./types";
import ShopTermsStyles from "./styles";

const ShopTerms: FC<PropsType> = (props) => {
  const { onAgree, onNotNow } = props;

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        centerComponent={
          <Text
            text="Terms and Conditions"
            textStyle={ShopTermsStyles.txtHeader}
          />
        }
      />
    );
  };

  const getButtons = () => {
    return (
      <View style={ShopTermsStyles.buttonContainer}>
        <Button onPress={onAgree} title="I Agree" />
        <View style={ShopTermsStyles.buttonSpacer} />
        <Button
          onPress={onNotNow}
          title="Not Now"
          buttonStyle={ShopTermsStyles.notNowButtonContainer}
          titleStyle={ShopTermsStyles.txtNotNow}
        />
      </View>
    );
  };

  const getContent = () => {
    return (
      <View style={ShopTermsStyles.container}>
        <View style={ShopTermsStyles.subContainer}>
          <View style={ShopTermsStyles.paragContainer}>
            <Text
              text="Lorem, ipsum."
              textStyle={ShopTermsStyles.paragHeader}
            />
            <Text
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, "
              textStyle={ShopTermsStyles.paragBody}
            />
          </View>

          <View style={ShopTermsStyles.paragContainer}>
            <Text
              text="Lorem, ipsum."
              textStyle={ShopTermsStyles.paragHeader}
            />
            <Text
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, "
              textStyle={ShopTermsStyles.paragBody}
            />
          </View>
        </View>

        <Fragment>{getButtons()}</Fragment>
      </View>
    );
  };

  return (
    <Fragment>
      <Fragment>{getHeader()}</Fragment>
      <Fragment>{getContent()}</Fragment>
    </Fragment>
  );
};

export default ShopTerms;
