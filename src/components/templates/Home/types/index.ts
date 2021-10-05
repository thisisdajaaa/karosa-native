/**
 *
 * @format
 *
 */
import { PropsType as BannerSlideProps } from "@app/components/atoms/Banner/types";
import { ViewProps } from "react-native";
export type PropsType = {
  bannerProps: BannerSlideProps;
  productProps: any[];
};

export type HeaderProps = Pick<ViewProps, "style"> & {
  onBack(): void;
};
