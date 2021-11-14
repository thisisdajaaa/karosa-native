import { AxiosError } from "axios";
import { Item } from "react-native-picker-select";

export type ResponseError = AxiosError;

export type ResponseState<T> = {
  response: T;
  isLoading: boolean;
  error?: AxiosError;
};

export type Audit = {
  createdAt: string;
  updatedAt: string;
};

export type PickerData = Omit<Item, "color" | "inputLabel">;

export type CommonLocation = {
  id: number;
  name: string;
};

export type ResponseWithAudit<T> = T & Audit;
