import { PropsType as BaseButtonProps } from "@app/atoms/Button/types";

export type Props = {
  title?: string;
  margin?: number;
} & BaseButtonProps;
