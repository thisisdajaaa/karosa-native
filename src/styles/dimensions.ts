import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const DIMENS = {
  screenWidth,
  screenHeight,
};

export default DIMENS;
