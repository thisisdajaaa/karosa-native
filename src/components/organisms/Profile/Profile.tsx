/**
 *
 * Profile
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";

const Profile: FC<PropsType> = (props) => {
  const {
    variation,
    coverPhoto,
    avatarPhoto,
    searchProps,
    onBack,
    onMore,
    onChat,
    onSettings,
    onFollow,
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
        <VariationOne
          variation={variation}
          coverPhoto={coverPhoto}
          avatarPhoto={avatarPhoto}
          searchProps={searchProps}
          onBack={onBack}
          onMore={onMore}
          onChat={onChat}
          onFollow={onFollow}
          shopName={shopName}
          address={address}
          isActive={isActive}
          rating={rating}
          followers={followers}
          chatPerf={chatPerf}
        />
      );

    case 2:
      return (
        <VariationTwo
          variation={variation}
          coverPhoto={coverPhoto}
          avatarPhoto={avatarPhoto}
          searchProps={searchProps}
          onBack={onBack}
          onChat={onChat}
          onSettings={onSettings}
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
        <VariationOne
          variation={variation}
          coverPhoto={coverPhoto}
          avatarPhoto={avatarPhoto}
          searchProps={searchProps}
          onBack={onBack}
          onMore={onMore}
          onChat={onChat}
          onFollow={onFollow}
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
