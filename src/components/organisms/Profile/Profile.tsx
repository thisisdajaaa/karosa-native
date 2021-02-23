/**
 *
 * Profile
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariatonOne from "./VariationOne";

const Profile: FC<PropsType> = (props) => {
  const {
    variation,
    coverPhoto,
    avatarPhoto,
    searchProps,
    onBack,
    onMore,
    onChat,
    onAdd,
    shopName,
    address,
    isActive,
    rating,
    followers,
    chatPerf,
  } = props;

  switch (variation) {
    case 1:
      return (
        <VariatonOne
          coverPhoto={coverPhoto}
          avatarPhoto={avatarPhoto}
          searchProps={searchProps}
          onBack={onBack}
          onMore={onMore}
          onChat={onChat}
          onAdd={onAdd}
          shopName={shopName}
          address={address}
          isActive={isActive}
          rating={rating}
          followers={followers}
          chatPerf={chatPerf}
        />
      );

    default:
      return (
        <VariatonOne
          coverPhoto={coverPhoto}
          avatarPhoto={avatarPhoto}
          searchProps={searchProps}
          onBack={onBack}
          onMore={onMore}
          onChat={onChat}
          onAdd={onAdd}
          shopName={shopName}
          address={address}
          isActive={isActive}
          rating={rating}
          followers={followers}
          chatPerf={chatPerf}
        />
      );
  }
};

export default Profile;
