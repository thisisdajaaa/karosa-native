/**
 *
 * @format
 *
 */

export type PropsType = {
  ratingCount?: number;
  imageSize?: number;
  startingValue?: number;
  fractions?: number;
  minValue?: number;
  readonly?: boolean;
  showRating?: boolean;
  onFinishRating?(rating: number): void;
  onStartRating?(): void;
};
