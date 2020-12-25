import RBSheet from "react-native-raw-bottom-sheet";

export type Options = "Share" | "Report" | "Block";

export type Props = {
  sheetRef: React.RefObject<RBSheet>;
};
