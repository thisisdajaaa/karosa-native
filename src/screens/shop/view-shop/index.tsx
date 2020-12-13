import React from "react";
import { ViewShopTabs } from "@app/navigators/tab-navigator";
import { Profile } from "@app/components/profile";
import { Props as ProfileProps } from "@app/components/profile/types";

const ViewShopScreen: React.FC = () => {
  const profProps: ProfileProps = {
    shopName: "Mercado de Karosa Shop",
    shopAddr: "166, Apas Lahug Cebu",
    rating: "4.8",
    followers: "4.3K",
    chatPerf: "89",
    placeholder: "Search in Shop",
  };

  return (
    <React.Fragment>
      <Profile {...profProps} />
      <ViewShopTabs />
    </React.Fragment>
  );
};

export default ViewShopScreen;
