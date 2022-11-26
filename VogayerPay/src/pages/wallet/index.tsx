import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getBalanceFn } from "../../api/wallet/useGetWallet";
import { WalletPage } from "../../modules/wallet/WalletPage";

type Props = {};

export default function Wallet(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <WalletPage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await getBalanceFn()
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  return {
    props: {},
  };
};
