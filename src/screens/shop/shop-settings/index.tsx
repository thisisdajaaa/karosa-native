import React, { useCallback,useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { ShopRequest } from "@app/redux/shop/models";
import { actions } from "@app/redux/shop";
import { useDispatch } from "react-redux";

// import axios from "axios";

import Choices from "./choices";
import { styles } from "./styles";

const ShopSettingScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Shop Settings",
      press: {
        left: () => goBack(),
      },
    },
    customStyles: styles.container,
  };

  const callShopApi = useCallback(
    (request: ShopRequest) => dispatch(actions.callShopApi.request(request)),
    [dispatch]
  );
  
  useEffect(() => {
    // const user = {
    //   identifier: "test666@gmail.com",
    //   password: "Passw0rd!",
    // };
    
    // // const payload = JSON.stringify(user);
    // console.log(user);
    // axios
    //   .post(
    //     "http://localhost:4040/v1/auth/register",
    //     { user },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )

    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
      
    const request: ShopRequest = {
      isActive: true,
    };

    callShopApi(request);
  }, [callShopApi]);

  return (
    <Screen {...screenProps}>
      <View style={styles.mainContainer}>
        <Choices />
      </View>
    </Screen>
  );
};

export default ShopSettingScreen;
