import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";
import { DefaultError } from "../types";
import { Transactions } from "./types";

export const getTransactionsFn = async () => {
  const response = await httpClient.get<Transactions>(
    process.env.NEXT_PUBLIC_API + apiRoutes.transactions,
    {
      params: {
        address: process.env.NEXT_PUBLIC_API_ADDRESS,
      },
    }
  );
  return response.data;
};

export const useGetTransactions = (
  opts?: UseQueryOptions<Transactions, DefaultError>
) =>
  useQuery<Transactions, DefaultError>(
    [
      process.env.NEXT_PUBLIC_API + apiRoutes.transactions,
      {
        address: process.env.NEXT_PUBLIC_API_ADDRESS,
      },
    ],
    () => getTransactionsFn(),
    opts
  );
