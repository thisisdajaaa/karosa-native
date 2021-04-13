/**
 *
 * @format
 *
 */
import { ImageSourcePropType } from "react-native";

export type PropsType = {
  avatarPhoto?: ImageSourcePropType;
  username: string;
  comments: string;
  likes: number;
  rate: number;
  tags: string[];
};
