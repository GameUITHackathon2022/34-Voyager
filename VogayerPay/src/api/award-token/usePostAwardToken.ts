import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";

export interface AwardTokenBody {
  amount: number;
}

export type AwardTokenResponse = {
  res: boolean;
};

export const postAwardTokenFn = async (body: AwardTokenBody) => {
  const response = await httpClient.post<AwardTokenResponse>(
    apiRoutes.awardToken,
    body
  );
  return response.data;
};

export const usePostAwardTokenMutation = (
  opts?: UseMutationOptions<
    AwardTokenResponse,
    AxiosError<AwardTokenResponse>,
    AwardTokenBody
  >
) =>
  useMutation<
    AwardTokenResponse,
    AxiosError<AwardTokenResponse>,
    AwardTokenBody
  >(postAwardTokenFn, opts);
