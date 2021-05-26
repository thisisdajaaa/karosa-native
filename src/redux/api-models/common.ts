import { Item } from "react-native-picker-select";

export type ResponseError = {
  code: any;
  message: string;
};

export type ResponseState<T> = {
  response: T;
  isLoading: boolean;
  error?: ResponseError | number;
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
