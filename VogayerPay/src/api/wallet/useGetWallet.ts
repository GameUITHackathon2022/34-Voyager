import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";
import { DefaultError } from "../types";
import { Balance } from "./types";

export const getBalanceFn = async () => {
  const response = await httpClient.get<Balance>(apiRoutes.balance);
  return response.data;
};

export const useGetBalance = (opts?: UseQueryOptions<Balance, DefaultError>) =>
  useQuery<Balance, DefaultError>(
    [apiRoutes.balance],
    () => getBalanceFn(),
    opts
  );
