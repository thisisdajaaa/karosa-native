/**
 *
 * @format
 *
 */

import { PropsType as FormButtonProps } from "@app/molecules/FormButton/types";

export type PropsType = {
  onBack(): void;
  onHelp(): void;
  btnRegisterProps: FormButtonProps;
};
