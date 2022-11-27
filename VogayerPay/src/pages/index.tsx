import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Transactions } from "../api/transactions/types";
import { getTransactionsFn } from "../api/transactions/useGetTransactions";
import { Balance } from "../api/wallet/types";
import { getBalanceFn } from "../api/wallet/useGetBalance";
import { WalletPage } from "../modules/wallet/WalletPage";

type Props = {
  resBalance: Balance;
  resTransactions: Transactions;
};

export default function Wallet(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <WalletPage
      resBalance={_props.resBalance}
      resTransactions={_props.resTransactions}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let resBalance = {} as Balance;
  let resTransactions = {} as Transactions;
  await getBalanceFn()
    .then((res) => (resBalance = res))
    .catch((error) => console.log(error));
  await getTransactionsFn()
    .then((res) => (resTransactions = res))
    .catch((error) => console.log(error));
  if (resBalance.status !== "Success") {
    return {
      notFound: true,
    };
  }
  if (resTransactions.status !== "Success") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      resBalance: resBalance,
      resTransactions: resTransactions,
    },
  };
};
