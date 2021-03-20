/**
 *
 * @format
 *
 */

import { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";

export type PropsType = {
  onForgot: () => void;
  loginButtonProps: FormButtonProps;
  onBack(): void;
};
