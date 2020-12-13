import { ImageSourcePropType } from "react-native";

type Perspective = "seller" | "buyer";

export type Props = {
  coverPhoto?: ImageSourcePropType;
  avatarPhoto?: ImageSourcePropType;
  placeholder: string;
  shopName: string;
  shopAddr: string;
  isActive?: boolean;
  rating: string;
  followers: string;
  chatPerf: string;
  perspective?: Perspective;
};
