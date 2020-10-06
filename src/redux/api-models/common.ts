export enum Result {
  Success = "0",
  Warning = "1",
  Error = "2",
}

type ResponseCommon = {
  result?: Result;
};

type Errors = {
  code: string;
  status: string;
  title: string;
  detail: string;
  message: string;
  stack: string;
};

export type ApiResponse<T> = {
  httpHeaders?: any;
  responseCommon: ResponseCommon;
  errors: Errors[];
} & T;
