/**
 *
 * @format
 *
 */

import { PropsType as SearchBarProps } from "@app/molecules/SearchBar/types";

export type PropsType = {
  variation: number;
  coverPhoto: string;
  avatarPhoto: string;
  searchProps?: SearchBarProps;
  onBack(): void;
  onMore?(): void;
  onChat?(): void;
  onFollow?(): void;
  onSettings?(): void;
  shopName: string;
  address: string;
  isActive: boolean;
  rating: string;
  followers: string;
  chatPerf: string;
};
