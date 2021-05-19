/**
 *
 * DiscountCoupon
 * @format
 *
 */

import React, { FC } from "react";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import { TouchableOpacity, View } from "react-native";
import Button from "@app/atoms/Button";

import type { PropsType } from "./types";
import { COUPON_OPACITY, ICON } from "./config";
import DiscountCouponStyles from "./styles";

const DiscountCoupon: FC<PropsType> = (props) => {
  const { discountPrice, minSpendPrice, validDate, onClaim, onCoupon } = props;

  return (
    <TouchableOpacity
      onPress={onCoupon}
      activeOpacity={COUPON_OPACITY}
      style={DiscountCouponStyles.container}>
      <Icon
        group="products"
        name="coupon"
        height={ICON.HEIGHT}
        width={ICON.WIDTH}
      />
      <View style={DiscountCouponStyles.discountContainer}>
        <Text
          text={`P${discountPrice}`}
          textStyle={DiscountCouponStyles.txtDiscount}
        />
        <Text text="OFF" textStyle={DiscountCouponStyles.txtDiscount} />
      </View>
      <View style={DiscountCouponStyles.detailsContainer}>
        <Text
          text="Minimum Spend"
          textStyle={DiscountCouponStyles.txtDetailsLight}
        />
        <Text
          text={`P${minSpendPrice}`}
          textStyle={DiscountCouponStyles.txtMinSpend}
        />
        <Text
          text="Valid until:"
          textStyle={DiscountCouponStyles.txtDetailsLight}
        />
        <View style={DiscountCouponStyles.bottomContainer}>
          <Text
            text={validDate}
            textStyle={DiscountCouponStyles.txtDetailsLight}
          />
          <View style={DiscountCouponStyles.btnMainContainer}>
            <Button
              onPress={onClaim}
              titleStyle={DiscountCouponStyles.txtButton}
              buttonStyle={DiscountCouponStyles.btnSubContainer}
              title="Claim"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiscountCoupon;
