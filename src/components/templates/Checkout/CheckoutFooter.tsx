import React, { FC, useState } from "react";
import { ScrollView, View } from "react-native";
import { ListItem } from "react-native-elements";
import { useFormikContext } from "formik";
import { currencyFormatter } from "@app/utils";
import { CheckoutContext } from "@app/redux/shop/models";
import Chip from "@app/atoms/Chip";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";

import { INITIAL_REDUCE, PAYMENT_METHOD } from "./config";
import CheckoutStyles from "./styles";

const CheckoutFooter: FC = () => {
  const { values } = useFormikContext<CheckoutContext>();

  const [paymentMethod, setPaymentMethod] = useState<PAYMENT_METHOD>("cod");

  const checkoutTotal = values.orderData.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.orderTotal),
    INITIAL_REDUCE
  );

  const getShippingFee = () => {
    const shippingFees: number[] = values.orderData.map((order) => {
      if (order.deliveryOption === "1") {
        return 50;
      }

      return 0;
    });

    return shippingFees.reduce(
      (accumulator, fee) => (accumulator += fee),
      INITIAL_REDUCE
    );
  };

  const finalTotal = getShippingFee() + checkoutTotal;

  return (
    <>
      <ListItem>
        <ListItem.Content>
          <Text text="Select Payment Method" />
        </ListItem.Content>
        <View style={CheckoutStyles.seeAllContainer}>
          <Text text="See All" textStyle={CheckoutStyles.txtSeeAll} />
        </View>
        <ListItem.Chevron iconStyle={CheckoutStyles.txtSeeAll} />
      </ListItem>
      <ListItem style={CheckoutStyles.paymentMethodContainer} bottomDivider>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <Chip
            selected={paymentMethod === "cod"}
            title="Cash on Delivery"
            iconGroup="checkout"
            iconName="coins"
            onPress={() => setPaymentMethod("cod")}
          />
          <Chip
            selected={paymentMethod === "gcash"}
            title="GCash"
            iconGroup="basket"
            iconName="store"
            onPress={() => setPaymentMethod("gcash")}
          />
        </ScrollView>
      </ListItem>
      <ListItem
        bottomDivider
        style={CheckoutStyles.paymentList}
        containerStyle={CheckoutStyles.paymentListContainer}>
        <View style={CheckoutStyles.paymentListSubContainer}>
          <Text text="Sub-Total (3 items)" />
          <Text
            text={currencyFormatter(String(checkoutTotal), "₱")}
            textStyle={CheckoutStyles.txtPaymentList}
          />
        </View>
        <View style={CheckoutStyles.paymentListSubContainer}>
          <Text text="Shipping Fee" />
          <Text
            text={currencyFormatter(String(getShippingFee()), "₱")}
            textStyle={CheckoutStyles.txtPaymentList}
          />
        </View>
        <View style={CheckoutStyles.paymentListLastContainer}>
          <Text text="Total Payment" />
          <Text
            text={currencyFormatter(String(finalTotal), "₱")}
            textStyle={CheckoutStyles.txtPaymentList}
          />
        </View>
      </ListItem>
      <ListItem bottomDivider containerStyle={CheckoutStyles.totalContainer}>
        <View style={CheckoutStyles.flexColumn}>
          <Text text="Total:" textStyle={CheckoutStyles.txtTotal} />
          <Text
            text={currencyFormatter(String(finalTotal), "₱")}
            textStyle={CheckoutStyles.txtFinalTotal}
          />
        </View>
        <Button
          title="Place Order"
          onPress={() => 0}
          buttonStyle={CheckoutStyles.btnPlaceOrder}
          titleStyle={CheckoutStyles.txtPlaceOrder}
        />
      </ListItem>
    </>
  );
};

export default CheckoutFooter;
