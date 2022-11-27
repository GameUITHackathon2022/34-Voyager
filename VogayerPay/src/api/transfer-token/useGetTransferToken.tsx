import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";

export interface TransfertokenBody {
  amount: number;
}

export type TransfertokenResponse = {
  res: boolean;
};

export const posttransfertokenFn = async (body: TransfertokenBody) => {
  const response = await httpClient.post<TransfertokenResponse>(
    apiRoutes.transferToken,
    body
  );
  return response.data;
};

export const usePosttransfertokenMutation = (
  opts?: UseMutationOptions<
    TransfertokenResponse,
    AxiosError<TransfertokenResponse>,
    TransfertokenBody
  >
) =>
  useMutation<
    TransfertokenResponse,
    AxiosError<TransfertokenResponse>,
    TransfertokenBody
  >(posttransfertokenFn, opts);
