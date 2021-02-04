import { ImageSourcePropType } from "react-native";

export type Props = {
  avatarPhoto?: ImageSourcePropType;
  username: string;
  comments: string;
  likes: number;
  rate:number;
  tags: string[];
};
