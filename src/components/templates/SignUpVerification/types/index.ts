import { PropsType as SubmitButtonProps } from "@app/molecules/FormButton/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  nextButtonProps: SubmitButtonProps;
  verificationNumberProps: FormInputProps & {
    inputLength: number;
  };
};
