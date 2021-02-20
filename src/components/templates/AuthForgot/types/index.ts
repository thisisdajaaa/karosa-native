/**
 *
 * @format
 *
 */
import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";

export type PropsType = {
  forgotButtonProps: SubmitButtonProps;
  onBack(): void;
  onHelp(): void;
};
