import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";

export interface AwardNFTBody {
  url: string;
}

export type AwardNFTResponse = {
  res: boolean;
};

export const postAwardNFTFn = async (body: AwardNFTBody) => {
  const response = await httpClient.post<AwardNFTResponse>(
    apiRoutes.awardNFT,
    body
  );
  return response.data;
};

export const usePostAwardNFTMutation = (
  opts?: UseMutationOptions<
    AwardNFTResponse,
    AxiosError<AwardNFTResponse>,
    AwardNFTBody
  >
) =>
  useMutation<AwardNFTResponse, AxiosError<AwardNFTResponse>, AwardNFTBody>(
    postAwardNFTFn,
    opts
  );
