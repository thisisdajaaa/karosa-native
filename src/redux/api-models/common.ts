export type ResponseState<T> = {
  response: T;
  isLoading: boolean;
  error?: Error;
};

export type Audit = {
  createdAt: string;
  updatedAt: string;
};
