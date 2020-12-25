import { ImageSourcePropType } from "react-native";
import { HeaderSubComponent } from "react-native-elements";

type Perspective = "seller" | "buyer";

type Details = {
  coverPhoto: ImageSourcePropType;
  avatarPhoto: ImageSourcePropType;
  perspective: Perspective;
  shopName: string;
  shopAddr: string;
  isActive: boolean;
  rating: string;
  followers: string;
  chatPerf: string;
};

export type Props = {
  details: Details;
  CenterComponent: HeaderSubComponent;
  RightComponent: HeaderSubComponent;
};
