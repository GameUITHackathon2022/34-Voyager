import { BadRequest } from "@tsed/exceptions";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { WalletPage } from "../../modules/wallet/WalletPage";

type Props = {};

export default function Wallet() {
  return <WalletPage />;
}

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const { locale } = context;
//   if (locale == undefined) {
//     throw new BadRequest("locale is missing");
//   }

//   return {
//     props: {},
//   };
// };
