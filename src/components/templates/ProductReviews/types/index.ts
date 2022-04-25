/**
 *
 * @format
 *
 */

export type PropsType = {
  onBack: () => void;
};

export type FilterType =
  | "All"
  | "With Comment"
  | "With Media"
  | "1 Star"
  | "2 Star"
  | "3 Star"
  | "4 Star"
  | "5 Star";

export type FilterRatingProps = {
  startingValue: number;
};

export type FilterChipProps = {
  selected: boolean;
  onPress: () => void;
  text?: string;
  total?: string;
  rating?: number;
};
