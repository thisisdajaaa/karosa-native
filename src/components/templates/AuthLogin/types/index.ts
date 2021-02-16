/**
 *
 * @format
 *
 */

import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";

export type PropsType = {
  onForgot: () => void;
  loginButtonProps: SubmitButtonProps;
  onBack(): void;
};
