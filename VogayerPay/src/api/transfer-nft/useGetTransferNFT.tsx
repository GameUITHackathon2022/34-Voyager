import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";

export interface transferNFTBody {
  amount: number;
}

export type transferNFTResponse = {
  res: boolean;
};

export const posttransferNFTFn = async (body: transferNFTBody) => {
  const response = await httpClient.post<transferNFTResponse>(
    apiRoutes.transferNFT,
    body
  );
  return response.data;
};

export const usePosttransferNFTMutation = (
  opts?: UseMutationOptions<
    transferNFTResponse,
    AxiosError<transferNFTResponse>,
    transferNFTBody
  >
) =>
  useMutation<
    transferNFTResponse,
    AxiosError<transferNFTResponse>,
    transferNFTBody
  >(posttransferNFTFn, opts);
