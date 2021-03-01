/**
 *
 * @format
 *
 */

import { PropsType as SearchBarProps } from "@app/molecules/SearchBar/types";

export type PropsType = {
  variation: number;
} & VariatonOne;

export type VariatonOne = {
  coverPhoto: string;
  avatarPhoto: string;
  searchProps: SearchBarProps;
  onBack(): void;
  onMore(): void;
  onChat(): void;
  onAdd(): void;
  shopName: string;
  address: string;
  isActive: boolean;
  rating: string;
  followers: string;
  chatPerf: string;
};
