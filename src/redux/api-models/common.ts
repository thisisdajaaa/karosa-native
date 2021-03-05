export type ResponseError = {
  code: any;
  message: string;
};

export type ResponseState<T> = {
  response: T;
  isLoading: boolean;
  error?: ResponseError;
};

export type Audit = {
  createdAt: string;
  updatedAt: string;
};

export type PickerData = {
  id: number;
  value: string;
};

export type ResponseWithAudit<T> = T & Audit;
