/**
 *
 * @format
 *
 */

export type PropsType = {
  variation: number;
  discount?: string;
  image?: string;
  name: string;
  currentPrice?: string;
  previousPrice?: string;
  sold?: string;
  buttonTitle?: string;
  onButtonClick?(): void;
  rating?: number;
  location?: string;
};
