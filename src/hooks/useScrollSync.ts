import { FlatListProps } from "react-native";
import { HeaderConfig, ScrollPair } from "@app/utils";

const useScrollSync = (
  scrollPairs: ScrollPair[],
  headerConfig: HeaderConfig
) => {
  const sync: NonNullable<FlatListProps<unknown>["onMomentumScrollEnd"]> = (
    event
  ) => {
    const { y } = event.nativeEvent.contentOffset;

    const { heightCollapsed, heightExpanded } = headerConfig;

    const headerDiff = heightExpanded - heightCollapsed;

    for (const { list, position } of scrollPairs) {
      const scrollPosition = position.value ?? 0;

      if (scrollPosition > headerDiff && y > headerDiff) {
        continue;
      }

      list.current?.scrollToOffset({
        offset: Math.min(y, headerDiff),
        animated: false,
      });
    }
  };

  return { sync };
};

export default useScrollSync;
