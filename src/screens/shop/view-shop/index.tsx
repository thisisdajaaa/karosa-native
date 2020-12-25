import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { ViewShopTabs } from "@app/navigators/tab-navigator";
import { Profile } from "@app/components/profile";
import { Props as ProfileProps } from "@app/components/profile/types";
import { SearchBar } from "@app/components/search-bar";
import ShopOptionsModal from "@app/screens/shop/options";

const ViewShopScreen: React.FC = () => {
  const optionsRef = useRef<RBSheet>(null);

  const profProps: ProfileProps = {
    details: {
      coverPhoto: require("../../../../assets/shop.jpg"),
      avatarPhoto: require("../../../../assets/hinata.png"),
      isActive: true,
      perspective: "buyer",
      shopName: "Mercado de Karosa Shop",
      shopAddr: "166, Apas Lahug Cebu",
      rating: "4.8",
      followers: "4.3K",
      chatPerf: "89",
    },
    CenterComponent: <SearchBar placeholder={"Search in Shop"} />,
    RightComponent: {
      icon: "more-horiz",
      color: "white",
      onPress: () => optionsRef.current?.open(),
    },
  };

  return (
    <React.Fragment>
      <Profile {...profProps} />
      <ViewShopTabs />

      <ShopOptionsModal sheetRef={optionsRef} />
    </React.Fragment>
  );
};

export default ViewShopScreen;
