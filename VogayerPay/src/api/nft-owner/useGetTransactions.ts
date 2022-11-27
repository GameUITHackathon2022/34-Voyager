import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import apiRoutes from "../../lib/apiRoutes";
import httpClient from "../../lib/httpClient";
import { Transactions } from "../transactions/types";
import { DefaultError } from "../types";

export const getOwnerNFTFn = async () => {
  const response = await httpClient.get<Transactions>(
    process.env.NEXT_PUBLIC_API + apiRoutes.ownerNFT,
    {
      params: {
        address: process.env.NEXT_PUBLIC_API_ADDRESS,
      },
    }
  );
  return response.data;
};

export const useGetOwnerNFT = (
  opts?: UseQueryOptions<Transactions, DefaultError>
) =>
  useQuery<Transactions, DefaultError>(
    [
      process.env.NEXT_PUBLIC_API + apiRoutes.ownerNFT,
      {
        address: process.env.NEXT_PUBLIC_API_ADDRESS,
        amout: 100,
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
      },
    ],
    () => getOwnerNFTFn(),
    opts
  );
