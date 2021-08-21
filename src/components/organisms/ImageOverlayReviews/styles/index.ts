/**
 *
 * @format
 *
 */

 import { theme } from "@app/styles";
 import { StyleSheet } from "react-native";
 
 const ImageOverlayReviewsStyles = StyleSheet.create({
   rowContainer: {
     flexDirection: "row",
   },
   horizontalContainer: {
     backgroundColor: theme.colors.white,
     flexDirection: "row",
     justifyContent: "space-between",
     paddingHorizontal: 16,
     paddingVertical: 8,
     alignItems: "center",
   },
 });
 
 export default ImageOverlayReviewsStyles;
