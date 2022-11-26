import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";
import { DefaultResponse } from "../types";
import { Wallet } from "./types";
import { DefaultError } from "../types";

export const getWalletFn = async () => {
  const response = await httpClient.get<DefaultResponse<Wallet>>(
    apiRoutes.wallet
  );
  return response.data;
};

export const useGetWallet = (
  opts?: UseQueryOptions<DefaultResponse<Wallet>, DefaultError>
) =>
  useQuery<DefaultResponse<Wallet>, DefaultError>(
    [apiRoutes.wallet],
    () => getWalletFn(),
    opts
  );
