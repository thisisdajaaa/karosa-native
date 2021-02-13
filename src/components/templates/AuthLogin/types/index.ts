/**
 *
 * @format
 *
 */

import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";

export type PropsType = {
  onPress?: () => void;
  loginButtonProps: SubmitButtonProps;
  onBack(): void;
};
