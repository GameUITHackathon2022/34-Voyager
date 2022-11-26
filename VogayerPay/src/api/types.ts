import type { AxiosError } from "axios";

export type ApiError = {
  code: string;
  http_code: number;
  title: string;
  description: string;
  internal: string;
};

export type DefaultResponse<T> = {
  data: T;
};

export type DefaultError = {};

export type DefaultQueryError = AxiosError<ApiError>;
